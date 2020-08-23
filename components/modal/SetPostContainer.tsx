import React, {
  useCallback,
  useState,
  FC,
  useRef,
  FormEvent,
  ChangeEvent,
  useEffect
} from "react";
import { useMutation } from "@apollo/client";
import axios from "axios";
import { addPostMutation } from "../../graphql/post/mutation/add";
import { updatePostMutation } from "../../graphql/post/mutation/update";
import { removePostMutation } from "../../graphql/post/mutation/remove";
import SetPostPresenter from "./SetPostPresenter";
import { useVssState, useVssDispatch, HIDE_POST_MODAL } from "../../context";

const SetPostContainer: FC = () => {
  const { activePost } = useVssState();
  const dispatch = useVssDispatch();

  const [header, setHeader] = useState("영상 업로드");

  const fileEl = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [status, setStatus] = useState<string>("PUBLIC");
  const [progress, setProgress] = useState<number>(0);
  const [file, setFile] = useState<string>("");

  const [add, { loading: addPostLoading }] = useMutation(addPostMutation);

  const [update, { loading: updatePostLoading }] = useMutation(
    updatePostMutation
  );

  const [remove, { loading: removePostLoading }] = useMutation(
    removePostMutation
  );

  const handleChangeTitle = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleChangeDescription = useCallback(
    async (e: ChangeEvent<HTMLTextAreaElement>) => {
      setDescription(e.target.value);
    },
    []
  );

  const handleChangeStatus = useCallback(
    async (e: ChangeEvent<HTMLSelectElement>) => {
      setStatus(e.target.value);
    },
    []
  );

  const handleClickFile = useCallback(() => {
    if (progress > 0 && progress < 100) {
      return alert("업로드 진행 중입니다.");
    }
    const node = fileEl.current;
    if (node) {
      node.click();
    }
  }, [progress]);

  const handleChangeFile = useCallback(async e => {
    if (!e.target.value) return; // cancel select file

    const { files } = e.target;

    const formData = new FormData();
    formData.append("file", files[0]);

    const response = await axios.post(
      `${process.env.BACKEND_API_PATH}/api/upload`,
      formData,
      {
        onUploadProgress: ({ lengthComputable, loaded, total }) => {
          if (lengthComputable) {
            setProgress(Math.floor((loaded / total) * 100));
          }
        }
      }
    );
    if (response.data) {
      setFile(response.data);
      setHeader("등록");
    }
  }, []);

  const handleDelete = useCallback(async () => {
    if (removePostLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("포스트를 삭제하시겠어요?");

    if (tf) {
      const {
        data: { deletePost }
      } = await remove({
        variables: {
          postId: activePost.postId
        }
      });
      if (deletePost) {
        alert("포스트가 삭제되었습니다.");
        dispatch({
          type: HIDE_POST_MODAL
        });
      }
    }
  }, [activePost, removePostLoading]);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (addPostLoading || updatePostLoading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }

      const tf = confirm(`입력한 내용으로 ${header}하시겠어요?`);

      if (tf) {
        try {
          if (header === "등록") {
            const {
              data: { addPost }
            } = await add({
              variables: {
                title,
                description,
                status,
                file
              }
            });
            if (addPost) {
              alert("포스트가 등록되었습니다.");
              dispatch({
                type: HIDE_POST_MODAL
              });
            }
          } else if (header === "수정") {
            const {
              data: { updatePost }
            } = await update({
              variables: {
                postId: activePost.postId,
                title,
                description,
                status,
                file
              }
            });
            if (updatePost) {
              alert("포스트가 수정되었습니다.");
              dispatch({
                type: HIDE_POST_MODAL
              });
            }
          } else {
            throw new Error("check current header");
          }
        } catch (error) {
          const { message } = JSON.parse(error.message);
          alert(message);
        }
      }
    },
    [
      title,
      description,
      status,
      file,
      addPostLoading,
      activePost,
      updatePostLoading
    ]
  );

  const handleClose = useCallback(() => {
    dispatch({
      type: HIDE_POST_MODAL
    });
  }, []);

  useEffect(() => {
    if (activePost.title) {
      setTitle(activePost.title);
    }
    if (activePost.description) {
      setDescription(activePost.description);
    }
    if (activePost.status) {
      setStatus(activePost.status);
    }
    if (activePost.postId) {
      setProgress(100);
      setHeader("수정");
    }
    if (activePost.url) {
      setFile(activePost.url);
    }
  }, [activePost]);

  return (
    <SetPostPresenter
      addPostLoading={addPostLoading}
      updatePostLoading={updatePostLoading}
      removePostLoading={removePostLoading}
      header={header}
      title={title}
      description={description}
      status={status}
      progress={progress}
      file={file}
      fileEl={fileEl}
      onClickFile={handleClickFile}
      onChangeFile={handleChangeFile}
      onChangeTitle={handleChangeTitle}
      onChangeDescription={handleChangeDescription}
      onChangeStatus={handleChangeStatus}
      onClose={handleClose}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
    />
  );
};

export default SetPostContainer;

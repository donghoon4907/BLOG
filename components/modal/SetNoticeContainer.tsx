import React, { useCallback, useState, useEffect, FC } from "react";
import { useMutation } from "@apollo/client";
import { addNoticeMutation } from "../../graphql/notice/mutation/add";
import { updateNoticeMutation } from "../../graphql/notice/mutation/update";
import { removeNoticeMutation } from "../../graphql/notice/mutation/remove";
import SetNoticePresenter from "./SetNoticePresenter";
import { useInput, useLazyAxios } from "../../hooks";
import { useVssDispatch, SET_NOTICE_MODAL } from "../../context";

type Props = {
  title: string;
  description: string;
  action: string;
  actionText: string;
  noticeId: string;
  isMaster: boolean;
};

const SetNoticeContainer: FC<Props> = ({
  title,
  description,
  action,
  actionText,
  noticeId,
  isMaster
}) => {
  const dispatch = useVssDispatch();
  const { loading, call } = useLazyAxios();
  const modalTitle = useInput(title);
  const modalDescription = useInput(description);
  const [mdDescription, setMdDescription] = useState("");
  const [preview, setPreview] = useState("");
  const [modalAction, setModalAction] = useState({
    code: action,
    modalTitle: actionText
  }); // readonly, modifiable, modify, add

  const [add, { loading: addNoticeLoading }] = useMutation(addNoticeMutation);

  const [update, { loading: updateNoticeLoading }] = useMutation(
    updateNoticeMutation
  );

  const [remove, { loading: removeNoticeLoading }] = useMutation(
    removeNoticeMutation
  );

  const convertTextIntoMd = async text => {
    if (!text) return alert("내용을 입력하세요.");

    const { data, error } = await call({
      method: "post",
      url: process.env.MDAPI_PATH,
      data: {
        text,
        mode: "gfm",
        context: "github/gollum"
      }
    });
    if (data) {
      const doc = new DOMParser().parseFromString(data, "text/html");
      return doc.body.innerHTML;
    } else if (error) {
      return null;
    }
  };

  const handlePreView = useCallback(async () => {
    if (loading) return;
    const md = await convertTextIntoMd(modalDescription.value);

    if (md) {
      setPreview(md);
    } else {
      alert("미리보기 로드에 실패했습니다.");
    }
  }, [modalDescription.value]);

  const handleRefreshPreview = useCallback(() => {
    setPreview("");
  }, []);

  const handleClose = useCallback(() => {
    dispatch({
      type: SET_NOTICE_MODAL,
      isShowNoticeModal: false
    });
  }, []);

  const handleShowEdit = useCallback(() => {
    setModalAction({
      code: "modify",
      modalTitle: "수정"
    });
  }, []);

  const handleDelete = useCallback(async () => {
    if (removeNoticeLoading) return alert("요청 중입니다.");

    const {
      data: { deleteNotice }
    } = await remove({
      variables: {
        noticeId
      }
    });
    if (deleteNotice) {
      alert("공지사항이 삭제되었습니다.");
      window.location.reload();
    }
  }, [removeNoticeLoading]);

  const handleSubmit = useCallback(async () => {
    if (!modalTitle.value) {
      return alert("제목을 입력하세요.");
    }

    if (!modalDescription.value) {
      return alert("내용을 입력하세요.");
    }

    if (modalAction.code === "add") {
      if (addNoticeLoading) return alert("요청 중입니다.");

      const {
        data: { addNotice }
      } = await add({
        variables: {
          title: modalTitle.value,
          description: modalDescription.value
        }
      });
      if (addNotice) {
        alert("공지사항이 등록되었습니다.");
        window.location.reload();
      }
    } else if (modalAction.code === "modify") {
      if (updateNoticeLoading) return alert("요청 중입니다.");

      const {
        data: { updateNotice }
      } = await update({
        variables: {
          title: modalTitle.value,
          description: modalDescription.value,
          noticeId
        }
      });
      if (updateNotice) {
        alert("공지사항이 수정되었습니다.");
        window.location.reload();
      }
    }
  }, [
    modalAction.code,
    modalTitle.value,
    modalDescription.value,
    addNoticeLoading,
    updateNoticeLoading
  ]);

  useEffect(() => {
    async function loadDescription(value) {
      console.log(value);
      const md = await convertTextIntoMd(value);
      console.log(md);
      if (md) {
        setMdDescription(md);
      }
    }
    if (description) {
      loadDescription(description);
    }
  }, []);

  return (
    <SetNoticePresenter
      action={modalAction}
      isMaster={isMaster}
      title={modalTitle}
      description={modalDescription}
      mdDescription={mdDescription}
      preview={preview}
      onShowEdit={handleShowEdit}
      onPreview={handlePreView}
      onRefreshPreview={handleRefreshPreview}
      onClose={handleClose}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
    />
  );
};

export default SetNoticeContainer;

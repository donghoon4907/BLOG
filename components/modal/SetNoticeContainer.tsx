import React, { useCallback, useState, useEffect, FC, FormEvent } from "react";
import { useMutation } from "@apollo/client";
import marked from "marked";
import { CREATE_NOTICE } from "../../graphql/notice/mutation/create";
import { UPDATE_NOTICE } from "../../graphql/notice/mutation/update";
import { DELETE_NOTICE } from "../../graphql/notice/mutation/delete";
import SetNoticePresenter from "./SetNoticePresenter";
import { useInput } from "../../hooks";
import { useLocalState, useLocalDispatch } from "../../context";
import { HIDE_NOTICE_MODAL } from "../../context/action";

/**
 * 공지사항 팝업 컨테이너 컴포넌트
 *
 * @Container
 * @Modal
 * @author frisk
 */
const SetNoticeContainer: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const { activeNotice, isMaster } = useLocalState();
  /**
   * 제목 입력을 위한 useInput 활성화
   */
  const modalTitle = useInput(activeNotice.title);
  /**
   * 내용 입력을 위한 useInput 활성화
   */
  const modalDescription = useInput(activeNotice.description);
  /**
   * 내용(마크다운) 상태 관리 모듈 활성화
   */
  const [mdDescription, setMdDescription] = useState<string>("");
  /**
   * 미리보기 상태 관리 모듈 활성화
   */
  const [preview, setPreview] = useState<string>("");
  /**
   * 팝업 상태 관리 모듈 활성화
   */
  const [modalAction, setModalAction] = useState<any>({
    code: activeNotice.action,
    modalTitle: activeNotice.actionText
  }); // readonly, modifiable, modify, add
  /**
   * 공지사항 추가 및 수정 mutation 활성화
   */
  const [set, { loading: setNoticeLoading }] = useMutation(
    activeNotice.id ? UPDATE_NOTICE : CREATE_NOTICE
  );
  /**
   * 공지사항 삭제 mutation 활성화
   */
  const [remove, { loading: removeNoticeLoading }] = useMutation(DELETE_NOTICE);
  /**
   * 미리보기 핸들러
   */
  const handlePreView = useCallback(async () => {
    /**
     * 내용을 입력하지 않은 경우
     */
    if (!modalDescription.value) {
      return alert("내용을 입력하세요.");
    }
    /**
     * 내용을 마크다운 형식으로 바꾸고 상태 변경
     */
    setPreview(marked(modalDescription.value));
  }, [modalDescription.value]);
  /**
   * 미리보기 종료 핸들러
   */
  const handleClosePreview = useCallback(() => {
    setPreview("");
  }, []);
  /**
   * 공지사항 팝업 숨기기 핸들러
   */
  const handleClose = useCallback(() => {
    /**
     * 공지사항 팝업 숨기기
     */
    dispatch({
      type: HIDE_NOTICE_MODAL
    });
  }, []);
  /**
   * 공지사항 수정 모드 전환 핸들러
   */
  const handleShowEdit = useCallback(() => {
    setModalAction({
      code: "modify",
      modalTitle: "수정"
    });
  }, []);
  /**
   * 공지사항 삭제 핸들러
   */
  const handleDelete = useCallback(async () => {
    /**
     * 삭제 요청 중인 경우
     */
    if (removeNoticeLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("공지사항을 삭제하시겠어요?");

    if (tf) {
      const {
        data: { deleteNotice }
      } = await remove({
        variables: {
          noticeId: activeNotice.id
        }
      });
      if (deleteNotice) {
        alert("공지사항이 삭제되었습니다.");
        location.reload();
      }
    }
  }, [removeNoticeLoading]);
  /**
   * 공지사항 등록 및 수정 핸들러
   */
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      /**
       * 요청 중인 경우
       */
      if (setNoticeLoading) {
        return alert("요청 중입니다. 잠시만 기다려주세요.");
      }

      const tf = confirm(
        `입력한 내용으로 ${
          modalAction.code === "add" ? "등록" : "수정"
        }하시겠어요?`
      );

      if (tf) {
        try {
          const {
            data: { addNotice, updateNotice }
          } = await set({
            variables: {
              title: modalTitle.value,
              description: modalDescription.value,
              noticeId: activeNotice.id
            }
          });
          if (updateNotice) {
            alert("공지사항이 수정되었습니다.");
            location.reload();
          } else if (addNotice) {
            alert("공지사항이 등록되었습니다.");
            location.reload();
          }
        } catch (error) {
          const { message } = JSON.parse(error.message);
          alert(message);
        }
      }
    },
    [
      modalAction.code,
      modalTitle.value,
      modalDescription.value,
      setNoticeLoading
    ]
  );
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 내용 마크다운 형식으로 변환
     */
    if (activeNotice.description) {
      setMdDescription(marked(activeNotice.description));
    }
  }, [activeNotice.description]);

  return (
    <SetNoticePresenter
      removeNoticeLoading={removeNoticeLoading}
      setNoticeLoading={setNoticeLoading}
      action={modalAction}
      isMaster={isMaster}
      title={modalTitle}
      description={modalDescription}
      mdDescription={mdDescription}
      preview={preview}
      onShowEdit={handleShowEdit}
      onPreview={handlePreView}
      onClosePreview={handleClosePreview}
      onClose={handleClose}
      onDelete={handleDelete}
      onSubmit={handleSubmit}
    />
  );
};

export default SetNoticeContainer;

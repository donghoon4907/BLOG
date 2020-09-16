import React, { FC, FormEvent } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { FormInput, FormTextArea } from "../common/Form";
import { UseInputProps } from "../../hooks";
import Loader from "../common/Loader";

const ReadOnlyDescription = styled.div`
  ${(props) => props.theme.whiteBox};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  overflow: auto;
  background: white;
  padding: 15px;
`;

const PreviewWrap = styled(ReadOnlyDescription)`
  z-index: 10;

  & > span {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
`;

type Props = {
  setNoticeLoading: boolean;
  removeNoticeLoading: boolean;
  action: any;
  isMaster: boolean;
  title: UseInputProps;
  description: UseInputProps;
  mdDescription: string;
  preview: string;
  onShowEdit: () => void;
  onPreview: () => void;
  onClosePreview: () => void;
  onClose: () => void;
  onDelete: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

/**
 * 공지사항 팝업 프레젠터 컴포넌트
 *
 * @Presenter
 * @author frisk
 * @param props.setNoticeLoading 등록 및 수정 요청 중 여부
 * @param props.removeNoticeLoading 삭제 요청 중 여부
 * @param props.action 팝업 모드
 * @param props.isMaster 운영자 여부
 * @param props.title 제목 입력을 위한 Hooks
 * @param props.description 내용 입력을 위한 Hooks
 * @param props.mdDescription 마크다운 내용
 * @param props.preview 미리보기
 * @param props.onShowEdit 수정 모드 전환 핸들러
 * @param props.onPreview 미리보기 핸들러
 * @param props.onClosePreview 미리보기 숨기기 핸들러
 * @param props.onClose 팝업 숨기기 핸들러
 * @param props.onDelete 삭제 요청 핸들러
 * @param props.onSubmit 등록 및 수정 요청 핸들러
 */
const SetNoticePresenter: FC<Props> = ({
  setNoticeLoading,
  removeNoticeLoading,
  action,
  isMaster,
  title,
  description,
  mdDescription,
  preview,
  onShowEdit,
  onPreview,
  onClosePreview,
  onClose,
  onDelete,
  onSubmit
}) => (
  <Modal onHide={onClose} show animation={false}>
    {(setNoticeLoading || removeNoticeLoading) && <Loader />}
    <Modal.Header closeButton>
      <Modal.Title>
        {action.code === "readonly" || action.code === "modifiable"
          ? title.value
          : `공지사항 ${action.modalTitle}`}
      </Modal.Title>
    </Modal.Header>
    <form onSubmit={onSubmit}>
      <Modal.Body>
        {(action.code === "add" || action.code === "modify") && (
          <FormInput
            placeholder="제목을 입력하세요."
            name="title"
            required
            autoComplete="off"
            {...title}
            label="제목"
          />
        )}
        <FormTextArea
          placeholder="내용을 입력하세요."
          name="description"
          required
          autoComplete="off"
          height={300}
          {...description}
          label="내용"
        >
          {(action.code === "readonly" || action.code === "modifiable") && (
            <ReadOnlyDescription
              dangerouslySetInnerHTML={{ __html: mdDescription }}
              className="markdown-body"
            ></ReadOnlyDescription>
          )}
          {preview && (
            <PreviewWrap>
              <div
                dangerouslySetInnerHTML={{ __html: preview }}
                className="markdown-body"
              ></div>
              <span aria-hidden="true" onClick={onClosePreview}>
                ×
              </span>
            </PreviewWrap>
          )}
        </FormTextArea>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          취소
        </Button>
        {(action.code === "readonly" || action.code === "modifiable") && (
          <>
            {isMaster && (
              <Button variant="danger" onClick={onDelete}>
                삭제
              </Button>
            )}
            <Button variant="primary" onClick={isMaster ? onShowEdit : onClose}>
              {isMaster ? "수정" : "확인"}
            </Button>
          </>
        )}
        {(action.code === "modify" || action.code === "add") && (
          <>
            <Button
              variant="info"
              onClick={preview ? onClosePreview : onPreview}
            >
              {preview ? "미리보기 취소" : "미리보기"}
            </Button>
            <Button variant="primary" type="submit">
              {action.code === "add" ? "등록" : "수정"}
            </Button>
          </>
        )}
      </Modal.Footer>
    </form>
  </Modal>
);

export default SetNoticePresenter;

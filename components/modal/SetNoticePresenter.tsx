import React, { Fragment, FC } from "react";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import Input from "../common/Input";
import { InputWrapper, Label, TextArea } from "../common/Form";
import { UseInputProps } from "../../hooks";
import Loader from "../common/Loader";

const ReadOnlyDescription = styled.div`
  ${props => props.theme.whiteBox};
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
  loading: boolean;
  setNoticeLoading: boolean;
  removeNoticeLoading: boolean;
  action: any;
  isMaster: boolean;
  title: UseInputProps;
  description: UseInputProps;
  mdDescription: string;
  preview: string;
  onShowEdit: any;
  onPreview: any;
  onRefreshPreview: any;
  onClose: any;
  onDelete: any;
  onSubmit: any;
};

const SetNoticePresenter: FC<Props> = ({
  loading,
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
  onRefreshPreview,
  onClose,
  onDelete,
  onSubmit
}) => (
  <Fragment>
    {(loading || setNoticeLoading || removeNoticeLoading) && <Loader />}
    <Modal onHide={onClose} show animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>
          {action.code === "readonly" || action.code === "modifiable"
            ? title.value
            : `공지사항 ${action.modalTitle}`}
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmit}>
        <Modal.Body>
          <InputWrapper>
            {(action.code === "add" || action.code === "modify") && (
              <Fragment>
                <Label htmlFor="title" val={title.value}>
                  제목을 입력하세요.
                </Label>
                <Input
                  placeholder="제목을 입력하세요."
                  name="title"
                  required
                  autoComplete="off"
                  {...title}
                />
              </Fragment>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="description" val={description.value}>
              내용을 입력하세요.
            </Label>
            <TextArea
              placeholder="내용을 입력하세요."
              name="description"
              required
              autoComplete="off"
              {...description}
            />
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
                <span aria-hidden="true" onClick={onRefreshPreview}>
                  ×
                </span>
              </PreviewWrap>
            )}
          </InputWrapper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            취소
          </Button>
          {(action.code === "readonly" || action.code === "modifiable") && (
            <Fragment>
              {isMaster && (
                <Button variant="danger" onClick={onDelete}>
                  삭제
                </Button>
              )}
              <Button
                variant="primary"
                onClick={isMaster ? onShowEdit : onClose}
              >
                {isMaster ? "수정" : "확인"}
              </Button>
            </Fragment>
          )}
          {(action.code === "modify" || action.code === "add") && (
            <Fragment>
              <Button
                variant="info"
                onClick={preview ? onRefreshPreview : onPreview}
              >
                {preview ? "미리보기 취소" : "미리보기"}
              </Button>
              <Button variant="primary" type="submit">
                {action.code === "add" ? "등록" : "수정"}
              </Button>
            </Fragment>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  </Fragment>
);

export default SetNoticePresenter;

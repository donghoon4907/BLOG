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
  /**
   * * Loading during set notice request
   */
  setNoticeLoading: boolean;
  /**
   * * Loading during remove notice request
   */
  removeNoticeLoading: boolean;
  /**
   * * Change ui action
   */
  action: any;
  /**
   * * Whether user is master
   */
  isMaster: boolean;
  /**
   * * Title with useInput
   */
  title: UseInputProps;
  /**
   * * Description with useInput
   */
  description: UseInputProps;
  /**
   * * Description converted to markdown
   */
  mdDescription: string;
  /**
   * * Preview converted to markdown
   */
  preview: string;
  /**
   * * Handler for show edit notice ui
   */
  onShowEdit: any;
  /**
   * * Handler for show preview notice ui
   */
  onPreview: any;
  /**
   * * Handler for close preview notice ui
   */
  onClosePreview: any;
  /**
   * * Handler for close set notice modal
   */
  onClose: any;
  /**
   * * Handler for remove notice
   */
  onDelete: any;
  /**
   * * Handler for submit
   */
  onSubmit: any;
};

/**
 * 공지사항 팝업 프레젠터 컴포넌트
 *
 * @Presenter
 * @author frisk
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
  <Fragment>
    {(setNoticeLoading || removeNoticeLoading) && <Loader />}
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
              height={300}
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
                <span aria-hidden="true" onClick={onClosePreview}>
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
                onClick={preview ? onClosePreview : onPreview}
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

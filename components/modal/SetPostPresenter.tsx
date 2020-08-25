import React, { Fragment, FC } from "react";
import styled from "styled-components";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import Input from "../common/Input";
import { InputWrapper, Label, TextArea, Select } from "../common/Form";
import Loader from "../common/Loader";
import { Upload } from "../icon";

const UploadWrapper = styled.div`
  ${(props) => props.theme.whiteBox};
  background: ${(props) => props.theme.bgColor};
  width: 100%;
  height: 300px;
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GuideLine = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  text-align: center;
  padding: 10px;

  & > div {
    flex: 1;
    padding: 10px;
  }
`;

type Props = {
  addPostLoading: boolean;
  updatePostLoading: boolean;
  removePostLoading: boolean;
  header: string;
  title: string;
  description: string;
  status: string;
  progress: number;
  file: string;
  $file: any;
  onClickFile: any;
  onChangeFile: any;
  onChangeTitle: any;
  onChangeDescription: any;
  onChangeStatus: any;
  onClose: any;
  onDelete: any;
  onSubmit: any;
};

const SetNoticePresenter: FC<Props> = ({
  addPostLoading,
  updatePostLoading,
  removePostLoading,
  header,
  title,
  description,
  status,
  progress,
  file,
  $file,
  onClickFile,
  onChangeFile,
  onChangeTitle,
  onChangeDescription,
  onChangeStatus,
  onClose,
  onDelete,
  onSubmit
}) => (
  <Fragment>
    {(addPostLoading || updatePostLoading || removePostLoading) && <Loader />}
    <Modal onHide={onClose} animation={false} show>
      <Modal.Header closeButton>
        <Modal.Title>{`포스트 ${header}`}</Modal.Title>
      </Modal.Header>
      <form onSubmit={onSubmit}>
        <Modal.Body>
          {!file ? (
            <UploadWrapper onClick={onClickFile}>
              <GuideLine>
                {progress > 0 && (
                  <div>
                    <ProgressBar
                      now={progress}
                      label={`${progress}%`}
                      style={{ width: "100%" }}
                    />
                  </div>
                )}
                {progress === 0 && (
                  <>
                    <div>
                      <Upload />
                    </div>
                    <div>영상을 업로드하려면 클릭하세요.</div>
                    <div>
                      <Button variant="primary">파일선택</Button>
                    </div>
                  </>
                )}
              </GuideLine>

              <input
                type="file"
                onChange={onChangeFile}
                ref={$file}
                hidden
                accept="video/*"
              />
            </UploadWrapper>
          ) : (
            <>
              <InputWrapper>
                <Label htmlFor="title" val={title}>
                  제목
                </Label>
                <Input
                  name="title"
                  placeholder="제목을 입력하세요."
                  required
                  autoComplete="off"
                  value={title}
                  onChange={onChangeTitle}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="description" val={description}>
                  내용
                </Label>
                <TextArea
                  required
                  name="description"
                  placeholder="내용을 입력하세요."
                  autoComplete="off"
                  value={description}
                  onChange={onChangeDescription}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="status" val={status}>
                  공개설정
                </Label>
                <Select
                  required
                  name="status"
                  value={status}
                  onChange={onChangeStatus}
                >
                  <option value="PUBLIC">공개</option>
                  <option value="PRIVATE">비공개</option>
                </Select>
              </InputWrapper>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={onClose}>
            취소
          </Button>
          {header === "수정" && (
            <Button variant="danger" onClick={onDelete}>
              삭제
            </Button>
          )}
          {file && (
            <Button variant="primary" type="submit">
              {header}
            </Button>
          )}
        </Modal.Footer>
      </form>
    </Modal>
  </Fragment>
);

export default SetNoticePresenter;

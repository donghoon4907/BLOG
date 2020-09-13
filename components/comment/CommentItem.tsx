import React, { FC, useState, useCallback, memo } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { Dropdown } from "react-bootstrap";
import { UPDATE_COMMENT } from "../../graphql/comment/mutation/update";
import { DELETE_COMMENT } from "../../graphql/comment/mutation/delete";
import { CommentProps } from "../../interfaces";
import { useInput } from "../../hooks";
import { InputWrapper, Label, TextArea } from "../common/Form";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import moment from "moment";
import { useLocalState } from "../../context";
import { More } from "../icon";
import Loader from "../common/Loader";

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: ${props => props.theme.boxBorder};
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const InfoWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > * {
    margin-right: 10px;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    flex: 1;
  }

  & > button:nth-child(1) {
    background: ${props => props.theme.infoColor};
    border: 1px solid ${props => props.theme.infoColor};
  }
`;

const OptionWrapper = styled.div`
  flex: 1;
  text-align: right;
  position: relative;
`;

const MoreWrapper = styled.div`
  position: relative;
  & #dropdown-custom-2 {
    position: absolute;
    top: -20px;
    right: 0;
    opacity: 0;
    z-index: 1;
  }

  & svg {
    fill: gray;
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: -5px;
  }
`;

/**
 * 댓글 렌더링 컴포넌트
 *
 * @Component
 * @author frisk
 */
const CommentItem: FC<CommentProps> = ({ id, content, user, createdAt }) => {
  /**
   * 로컬 상태 관리 모듈 활성화
   */
  const { id: userId } = useLocalState();
  /**
   * 댓글 수정 mutation 활성화
   */
  const [upd, { loading: updateLoading }] = useMutation(UPDATE_COMMENT);
  /**
   * 댓글 삭제 mutation 활성화
   */
  const [del, { loading: deleteLoading }] = useMutation(DELETE_COMMENT);
  /**
   * 댓글 입력을 위한 useInput 활성화
   */
  const comment = useInput(content);
  /**
   * 수정모드 전환 상태 관리 모듈 활성화
   */
  const [active, setActive] = useState<boolean>(false);
  /**
   * 수정모드 전환 상태 관리 모듈 활성화
   */
  const [contentState, setContentState] = useState<string>(content);
  /**
   * 삭제 상태 관리 모듈 활성화
   */
  const [disabled, setDisabled] = useState<boolean>(false);
  /**
   * 내가 작성한 댓글 여부
   */
  const isMyComment = userId ? userId === user.id : false;
  /**
   * 수정 모드 전환 핸들러
   */
  const handleActive = useCallback(() => {
    setActive(true);
  }, []);
  /**
   * 취소 핸들러
   */
  const handleCancel = useCallback(() => {
    const tf = confirm("수정을 취소하시겠어요?");
    if (tf) {
      setActive(false);
    }
  }, []);
  /**
   * 댓글 수정 핸들러
   */
  const handleUpdate = useCallback(async () => {
    /**
     * 요청 중인 경우
     */
    if (updateLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("입력한 내용으로 수정하시겠어요?");

    if (tf) {
      try {
        await upd({
          variables: { id, content: comment.value }
        });
        /**
         * 댓글 랜더링 상태 변경
         */
        setContentState(comment.value);
        /**
         * 수정 모드 해제
         */
        setActive(false);
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [updateLoading, comment.value]);
  /**
   * 댓글 삭제 핸들러
   */
  const handleDelete = useCallback(async () => {
    /**
     * 요청 중인 경우
     */
    if (deleteLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("댓글을 삭제하시겠어요?");

    if (tf) {
      try {
        await del({
          variables: { id }
        });
        /**
         * 컴포넌트 비활성화
         */
        setDisabled(true);
        /**
         * 수정 모드 해제
         */
        setActive(false);
      } catch (error) {
        const { message } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, []);

  return (
    <CommentWrapper>
      {(updateLoading || deleteLoading) && <Loader />}
      <InfoWrapper>
        <Avatar src={user.avatar.url} size="50" userId={user.id} />
        <span>{user.nickname}</span>
        <span>·</span>
        <time>{moment(createdAt).format("YYYY년 MM월 DD일 HH시 mm분")}</time>
        {isMyComment && (
          <OptionWrapper>
            <MoreWrapper>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-custom-2" />
                {!disabled && <More />}
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleActive}>수정</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={handleDelete}>삭제</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </MoreWrapper>
          </OptionWrapper>
        )}
      </InfoWrapper>
      {active ? (
        <>
          <InputWrapper>
            <Label htmlFor="comment" val={comment.value}>
              댓글
            </Label>
            <TextArea
              placeholder="댓글을 입력하세요."
              name="comment"
              autoComplete="off"
              height={100}
              {...comment}
            />
          </InputWrapper>
          <BtnWrapper>
            <Button onClick={handleCancel}>취소</Button>
            <Button onClick={handleUpdate}>댓글 수정</Button>
          </BtnWrapper>
        </>
      ) : (
        <pre>{disabled ? <em>삭제된 댓글입니다.</em> : contentState}</pre>
      )}
    </CommentWrapper>
  );
};

export default memo(CommentItem);

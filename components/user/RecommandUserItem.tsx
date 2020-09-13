import React, { FC, useState, useRef, useCallback, memo } from "react";
import styled from "styled-components";
import { Overlay } from "react-bootstrap";
import { useLocalState } from "../../context";
import Avatar from "../common/Avatar";
import { UserProps } from "../../interfaces";

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 5px;
`;

const AvatarWrapper = styled.div`
  width: 50px;
`;

const Title = styled.h6`
  width: 150px;
  font-weight: 500;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
`;

const SubTitle = styled.div`
  font-size: 13px;
`;

/**
 * * 추천 사용자 목록 컴포넌트
 *
 * @Component
 * @author frisk
 *
 */
const RecommandUserItem: FC<UserProps> = ({
  id,
  avatar,
  nickname,
  postCount
}) => {
  /**
   * 로컬 상태 감시 모듈 활성화
   */
  const { isCollapseNav } = useLocalState();
  /**
   * 튤팁 보이기 상태 모듈 활성화
   */
  const [show, setShow] = useState<boolean>(false);
  /**
   * avatar element
   */
  const $avatar = useRef<HTMLDivElement>(null);
  /**
   * 프로필 사진 mouse enter 핸들러
   */
  const handleEnterAvatar = useCallback(() => {
    if (isCollapseNav === "contract") {
      setShow(true);
    }
  }, [isCollapseNav]);
  /**
   * 프로필 사진 mouse leave 핸들러
   */
  const handleLeaveAvatar = useCallback(() => {
    if (isCollapseNav === "contract") {
      setShow(false);
    }
  }, [isCollapseNav]);

  return (
    <Container>
      <AvatarWrapper
        ref={$avatar}
        onMouseEnter={handleEnterAvatar}
        onMouseLeave={handleLeaveAvatar}
      >
        <Avatar size="45" src={avatar.url} userId={id} />
      </AvatarWrapper>
      {isCollapseNav === "expand" && (
        <div>
          <Title>{nickname}</Title>
          <SubTitle>{postCount} posts</SubTitle>
        </div>
      )}
      <Overlay target={$avatar.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              backgroundColor: "white",
              padding: "2px 10px",
              borderRadius: 3,
              zIndex: 3,
              left: 12,
              boxShadow:
                "0 1px 2px rgba(0, 0, 0, 0.15), 0 0 2px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div>
              <Title>{nickname}</Title>
              <SubTitle>{postCount} posts</SubTitle>
            </div>
          </div>
        )}
      </Overlay>
    </Container>
  );
};

export default memo(RecommandUserItem);

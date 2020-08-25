import React, { Fragment, FC } from "react";
import styled from "styled-components";
import { OverlayTrigger, Popover, Dropdown } from "react-bootstrap";
import moment from "moment";
import Avatar from "../common/Avatar";
import Video from "../common/Video";
import Timestamp from "../common/Timestamp";
import { HeartFull, HeartEmpty, Download, More } from "../icon";
import HoverUser from "../user/HoverUser";

const Container = styled.div`
  ${props => props.theme.whiteBox};
  width: 100%;
  margin-bottom: 30px;
`;

const Header = styled.div`
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const User = styled.div`
  position: relative;
  width: 100px;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 15px;
  border-top: ${props => props.theme.boxBorder};
  border-bottom: ${props => props.theme.boxBorder};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled(Title)`
  top: 30px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0;
`;

const Footer = styled.div`
  padding: 15px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.span<{ disabledMobile?: boolean }>`
  margin-right: 10px;
  ${props => props.disabledMobile && props.theme.isMobile && "display: none"}
`;

const DownloadItem = styled.div`
  display: inline-block;
  width: 100%;
`;

const DownloadLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background: ${props => props.theme.blueColor};
  text-align: center;
  padding: 7px 0;
  font-size: 14px;

  &:hover {
    color: white;
    text-decoration: none;
  }
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
    width: 20px;
    height: 20px;
    fill: gray;
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: 0;
  }
`;

type Props = {
  title: string;
  description: string;
  status: string;
  createdAt: string;
  user: any;
  video: any;
  isLiked: boolean;
  likeCount: number;
  isMyPost: string | boolean;
  isShowUser: boolean;
  onClickAvatar: any;
  onLike: any;
  onUpdate: any;
  onRoom?: any;
  onDelete: any;
};

const PostPresenter: FC<Props> = ({
  title,
  description,
  status,
  createdAt,
  user,
  video,
  isLiked,
  likeCount,
  isMyPost,
  isShowUser,
  onClickAvatar,
  onLike,
  onUpdate,
  // onRoom,
  onDelete
}) => (
  <Container>
    <Header>
      <User>
        <Avatar size="30" src={user.avatar.url} onClick={onClickAvatar} />
        <div style={{ textIndent: 10 }}>{user.nickname}</div>
        {isShowUser && <HoverUser userId={user.id} />}
      </User>
      <div style={{ width: 100, textAlign: "right" }}>
        {isMyPost && (
          <Dropdown>
            <MoreWrapper>
              <Dropdown.Toggle
                id="dropdown-custom-2"
                style={{
                  position: "absolute",
                  top: -20,
                  right: 0,
                  opacity: 0,
                  zIndex: 1
                }}
              />
              <More />
            </MoreWrapper>

            <Dropdown.Menu>
              <Dropdown.Item onClick={onUpdate}>포스트 수정</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={onDelete}>포스트 삭제</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </Header>
    <Video src={video.url} />
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Body>
    <Footer>
      <IconWrapper>
        <div>
          <Icon onClick={onLike}>
            {isLiked ? <HeartFull /> : <HeartEmpty />}
          </Icon>
          <Icon>{likeCount.toLocaleString()}</Icon>
          {status === "PUBLIC" && (
            <Fragment>
              {/* <Icon>
                <Room onClick={onRoom} />
              </Icon> */}

              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Title as="h3">다운로드</Popover.Title>
                    <Popover.Content
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "auto"
                      }}
                    >
                      <DownloadItem>
                        <DownloadLink href={video.url} download>
                          기본
                        </DownloadLink>
                      </DownloadItem>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Icon disabledMobile>
                  <Download />
                </Icon>
              </OverlayTrigger>
            </Fragment>
          )}
        </div>
        <Timestamp text={moment(createdAt).format("YYYY-MM-DD HH:mm:ss")} />
      </IconWrapper>
    </Footer>
  </Container>
);

export default PostPresenter;

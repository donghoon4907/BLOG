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
  display: flex;
  justify-content: flex-start;
  margin-bottom: 30px;
`;

const Header = styled.div`
  padding: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
`;

const User = styled.div`
  position: relative;
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nick = styled.div`
  width: 100px;
  text-indent: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  /**
   * 제목
   */
  title: string;
  /**
   * 내용
   */
  description: string;
  /**
   * 등록일
   */
  createdAt: string;
  /**
   * 등록자
   */
  user: any;
  /**
   * 좋아요 여부
   */
  isLike: boolean;
  /**
   * 좋아요 수
   */
  likeCount: number;
  /**
   * 내가 작성했는지 여부
   */
  isMyPost: boolean;
  /**
   * 좋아요 핸들러
   */
  onLike: any;
};

/**
 * Component for render post
 *
 * @Presenter
 * @author frisk
 */
const PostPresenter: FC<Props> = ({
  title,
  description,
  createdAt,
  user,
  isLike,
  likeCount,
  isMyPost,
  onLike
}) => (
  <Container>
    <Header>
      <User>
        <Avatar size="30" src={user.avatar.url} />
        <Nick>{user.nickname}</Nick>
      </User>
    </Header>
    <Body>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Body>
    <Footer>
      <IconWrapper>
        <div>
          <Icon onClick={onLike}>
            {isLike ? <HeartFull /> : <HeartEmpty />}
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

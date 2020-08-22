import React, { useCallback, FC, memo } from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import CarouselContainer from "../common/Carousel";
import Timestamp from "../common/Timestamp";
import { Notice } from "../../interfaces";
import { useVssState, useVssDispatch, SHOW_NOTICE_MODAL } from "../../context";

const NoticeWrapper = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15%;
  margin-left: 15%;
  padding: 5px;
  text-align: center;
  cursor: pointer;
`;

interface Props {
  notices: Notice[];
}

const NoticeList: FC<Props> = ({ notices }) => {
  const dispatch = useVssDispatch();
  const { isMaster } = useVssState();

  const handleClick = useCallback(
    (title, description, noticeId) => {
      dispatch({
        type: SHOW_NOTICE_MODAL,
        action: isMaster ? "modifiable" : "readonly",
        actionText: "",
        title,
        description,
        noticeId
      });
    },
    [isMaster]
  );
  return (
    <CarouselContainer>
      {notices.map(({ id, title, description, updatedAt }) => (
        <Carousel.Item key={id}>
          <NoticeWrapper onClick={() => handleClick(title, description, id)}>
            <div>{title}</div>
            <Timestamp text={updatedAt} />
          </NoticeWrapper>
        </Carousel.Item>
      ))}
    </CarouselContainer>
  );
};

export default memo(NoticeList);

import React, { useCallback, FC } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { Carousel } from "react-bootstrap";
import { noticesQuery } from "../../graphql/notice/query";
import CarouselContainer from "../common/Carousel";
import Timestamp from "../common/Timestamp";
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

const NoticeList: FC = () => {
  const dispatch = useVssDispatch();
  const { isMaster } = useVssState();

  const { data } = useQuery(noticesQuery, {
    variables: {
      first: 10
    }
  });

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
      {data.getNotices.map(({ id, title, description, updatedAt }) => (
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

export default NoticeList;

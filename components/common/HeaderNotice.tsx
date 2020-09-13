import React, { FC, useEffect, useState, useCallback } from "react";
import { useApolloClient } from "@apollo/client";
import styled from "styled-components";
import { useLocalDispatch } from "../../context";
import { SHOW_NOTICE_MODAL } from "../../context/action";
import { GET_NOTICES } from "../../graphql/notice/query";
import { NoticeProps } from "../../interfaces";
import { Notice } from "../icon";

const Contianer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px !important;

  & u {
    margin-left: 5px;
  }
`;

/**
 * 공지사항 컴포넌트
 *
 * @Component
 * @author frisk
 */
const HeaderNotice: FC = () => {
  /**
   * 로컬 상태 변경 모듈 활성화
   */
  const dispatch = useLocalDispatch();
  /**
   * 아폴로 클라이언트 활성화
   */
  const client = useApolloClient();
  /**
   * 아폴로 클라이언트 활성화
   */
  const [noticeList, setNoticeList] = useState<NoticeProps[]>([]);
  /**
   * 클릭 핸들러
   */
  const handleClick = useCallback(({ title, description, id }) => {
    dispatch({
      type: SHOW_NOTICE_MODAL,
      action: "readonly",
      id,
      actionText: "",
      title,
      description
    });
  }, []);
  /**
   * 라이프 사이클 모듈 활성화
   */
  useEffect(() => {
    /**
     * 공지사항 캐시 로드
     */
    const { notices } = client.readQuery({
      query: GET_NOTICES,
      variables: {
        first: 1,
        orderBy: "createdAt_DESC"
      }
    }) as any;
    /**
     * 추천 사용자 로드
     */
    setNoticeList(notices);
  }, []);
  return (
    <Contianer>
      {noticeList.map(notice => (
        <div key={notice.id}>
          <Notice />
          <u onClick={() => handleClick(notice)}>{notice.title}</u>
        </div>
      ))}
    </Contianer>
  );
};

export default HeaderNotice;

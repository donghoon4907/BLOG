import React, { FC, useState, useEffect, memo } from "react";
import styled from "styled-components";
import { useApolloClient } from "@apollo/client";
import RecommandUserItem from "../user/RecommandUserItem";
import { GET_USERS } from "../../graphql/user/query";

const Container = styled.div`
  height: 500px;
`;

/**
 * Feed 페이지에서 사용하는 추천 사용자 리스트
 *
 * @Component
 * @author frisk
 */
const RecommandUserList: FC = () => {
  /**
   * 아폴로 클라이언트 활성화
   */
  const client = useApolloClient();
  /**
   * 추천 사용자 목록
   */
  const [recommandUsers, setRecommandUsers] = useState<any>([]);
  /**
   * 마운트 콜백 모듈 활성화
   */
  useEffect(() => {
    /**
     * 페이지 캐시 로드
     */
    const data = client.readQuery({
      query: GET_USERS,
      variables: {
        first: 10,
        orderBy: "postCount_DESC"
      }
    });
    /**
     * 추천 사용자 로드
     */
    setRecommandUsers(data.users);
  }, []);
  return (
    <Container>
      {recommandUsers.map(user => (
        <RecommandUserItem key={user.id} {...user} />
      ))}
    </Container>
  );
};

export default memo(RecommandUserList);

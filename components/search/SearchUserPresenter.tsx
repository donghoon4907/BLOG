import React, { FC, memo } from "react";
import styled from "styled-components";
import SearchUserItem from "../user/SearchUserItem";
import Subject from "../common/Subject";

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 230px;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 10px;

  ${props => props.theme.media.phone} {
    flex-direction: column;
    height: auto;
  }
`;

type Props = {
  users: any;
  recommandUsers: any;
  keyword: string;
};

const SearchUserPresenter: FC<Props> = ({ users, recommandUsers, keyword }) => (
  <>
    <Subject>"{keyword}"에 대한 검색결과</Subject>
    {users.length === 0 && <Subject>추천 사용자</Subject>}
    <Container>
      {users.length > 0
        ? users.map(user => <SearchUserItem key={user.id} {...user} />)
        : recommandUsers.map(user => (
            <SearchUserItem key={user.id} {...user} />
          ))}
    </Container>
  </>
);

export default memo(SearchUserPresenter);

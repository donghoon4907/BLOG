import React, { FC, memo } from "react";
import styled from "styled-components";
import SearchUserItem from "../user/SearchUserItem";

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

interface Props {
  users: any;
}

const SearchUser: FC<Props> = ({ users }) => (
  <Container>
    {users.map(user => (
      <SearchUserItem key={user.id} {...user} />
    ))}
  </Container>
);

export default memo(SearchUser);

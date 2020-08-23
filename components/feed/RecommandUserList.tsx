import React, { FC, memo } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { recommandUsersQuery } from "../../graphql/user/query";
import RecommandUserItem from "../user/RecommandUserItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecommandUserList: FC = () => {
  const { data } = useQuery(recommandUsersQuery);

  return (
    <Container>
      {data.getRecommandUsers.map(user => (
        <RecommandUserItem key={user.id} {...user} />
      ))}
    </Container>
  );
};

export default memo(RecommandUserList);

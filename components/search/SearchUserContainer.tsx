import { useRouter } from "next/router";
import React, { FC } from "react";
import { useQuery } from "@apollo/client";
import { usersQuery, recommandUsersQuery } from "../../graphql/user/query";
import SearchUserPresenter from "./SearchUserPresenter";

const SearchUserContainer: FC = () => {
  const router = useRouter();
  const keyword = decodeURIComponent(router.query.keyword as string);

  const { data: users } = useQuery(usersQuery, {
    variables: {
      keyword,
      first: 10
    }
  });

  const { data: recommandUsers } = useQuery(recommandUsersQuery);

  return (
    <SearchUserPresenter
      users={users.getUsers}
      recommandUsers={recommandUsers.getRecommandUsers}
      keyword={keyword}
    />
  );
};

export default SearchUserContainer;

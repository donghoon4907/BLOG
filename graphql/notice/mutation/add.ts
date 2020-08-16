import { gql } from "@apollo/client";

export const addNoticeMutation = gql`
  mutation addNotice($title: String!, $description: String!) {
    addNotice(title: $title, description: $description)
  }
`;

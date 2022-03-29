import { gql } from "@apollo/client";

export const GET_PROJECT = gql`
query Query {
  getProjects {
    id
    title
    tasks {
      id
      title
    }
    users {
      id
      username
      email
      active
    }
  }
}
`;
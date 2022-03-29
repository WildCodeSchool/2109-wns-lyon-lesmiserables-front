import { gql } from "@apollo/client"; // eslint-disable-line import/no-extraneous-dependencies


export const SIGNIN = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
    }
  }
`;
export const SIGNUP = gql`
  mutation signUp($data: SignUpInput!) {
    signUp(data: $data) {
    secretToken
  }
  }
`;
import { gql } from "@apollo/client";

export const GET_USER = gql`
query Query {
    getUser {
        id
        username
        email
        projects {
            id
            title
            tasks {
                id
                title
            }
        }
    }
}
`;
export const GET_CURRENT_USER = gql`
query Query {
    getProfile {
        id
        username
        email
        active
        role
        projects {
            id
            title
            tasks {
                id
                title
            }
        }
    }
}
`;
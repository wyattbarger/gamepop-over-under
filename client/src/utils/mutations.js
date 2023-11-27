// Add an import for the GraphQL technology to get our mutations to function.
import { gql } from "@apollo/client";

// Add the mutation to add a new User to the database.
export const ADD_USER = gql`
  mutation Mutation($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
        password
        highscore
      }
    }
  }
`;

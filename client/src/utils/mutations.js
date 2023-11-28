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

// Add the mutation to log an existing User into Game Pop.
export const LOGIN_USER = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
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

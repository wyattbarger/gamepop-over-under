import { gql } from '@apollo/client';

export const FETCH_ALL_GAMES = gql`
query Query {
    fetchAllGames {
      name
      total_rating
      url
      cover {
        image_id
      }
    }
  }
    `;
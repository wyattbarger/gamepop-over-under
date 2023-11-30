import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_LEADERS}  from '../utils/queries';
import styled from "@emotion/styled";



function Leaderboard() {
  const { loading, error, data } = useQuery(GET_LEADERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;

  return (
    <div>
      <h2>Leaderboard</h2>
      {data.users.map((user, index) => (
        <p key={index}>
          {index + 1}. {user.username}: {user.highscore}
        </p>
      ))}
    </div>
  );
}

export default Leaderboard;
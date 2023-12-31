import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_LEADERS}  from '../utils/queries';
import styled from "@emotion/styled";
import Header from '../components/Header';
import Footer from '../components/Footer';

const LeaderboardContainer = styled.div`
  text-align: center;
  justify-content: center;
  opacity: 0;
  animation: fadeInAnimation ease 1.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LeaderboardTitle = styled.h2`
  color: #ff4df0;
  font-size: 7rem; 
  text-shadow: 2px 5px 3px rgba(112, 255, 225, 1),
               2px 5px 3px rgba(255, 255, 255, 1);

  @media (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

const LeaderboardItem = styled.p`
  color: #70ffdf;
  font-size: 1.6rem;
  text-shadow: 1px 2px 2px rgba(255, 77, 240, 1);

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

  function Leaderboard() {
    const { loading, error, data } = useQuery(GET_LEADERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :{error.message}</p>;

  return (
    <LeaderboardContainer>
      <Header />
      <LeaderboardTitle>Leaderboard</LeaderboardTitle>
      {data.users.map((user, index) => (
        <LeaderboardItem key={index}>
          {index + 1}. {user.username}: {user.highscore}
        </LeaderboardItem>
      ))}
      <Footer />
    </LeaderboardContainer>
  );
}

export default Leaderboard; 
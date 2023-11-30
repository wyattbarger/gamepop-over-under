import React, { useState, useEffect } from "react";
import { useQuery, useMutation} from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";
import { UPDATE_HIGHSCORE_MUTATION } from "../utils/mutations";
import { ScoreContext } from "../utils/scoreContext";
import Header from "../components/Header";
import { jwtDecode as decode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";

import { Container, Grid, Box } from '@mui/material';
import styled from "@emotion/styled";

const GameContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
`;

const StyledBox = styled(Box)`
  margin: 0px 50px;
`;

function PlayGame() {
  const { loading, data } = useQuery(FETCH_ALL_GAMES);
  let games = data?.fetchAllGames || [];

  const [updateHighScore, {data: mutationData}] = useMutation(UPDATE_HIGHSCORE_MUTATION);
  const handleEndGame = () => {
    const token = localStorage.getItem('id_token');
    if (!token) {
      return}
    const decoded = decode(token);
    const username = decoded.data.username
    console.log('username:', username);
    console.log('score:', score);
    updateHighScore({ variables: { username: username, score: score } });
};

  const [score, setScore] = useState(0);
  const [game, setGame] = useState({
    gameList: [],
    gameA: null,
    gameB: null,
    guessed: [],
    score: 0,
  });

  function shuffle(array) {
    let arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arrayCopy[i];
      arrayCopy[i] = arrayCopy[j];
      arrayCopy[j] = temp;
    }
    return arrayCopy;
  }
  
  useEffect(() => {
    if (!loading && games.length) {
      const shuffledGames = shuffle(games);

      setGame({
        gameList: shuffledGames,
        gameA: shuffledGames[0],
        gameB: shuffledGames[1],
        guessed: [0, 1],
        score: 0,
      });
    }
  }, [loading]);

  function getNextGames() {
    setGame((prevState) => {
      let nextGameList = [...prevState.gameList];
      let nextGuessed = [...prevState.guessed];
  
      // Remove guessed games from gameList
      nextGuessed.forEach((index) => {
        nextGameList = nextGameList.filter((game, i) => i !== index);
      });
  
      // Select new games
      let nextGameAIndex = Math.floor(Math.random() * nextGameList.length);
      let nextGameBIndex;
      do {
        nextGameBIndex = Math.floor(Math.random() * nextGameList.length);
      } while (nextGameAIndex === nextGameBIndex);
      console.log('Guessed games:', prevState.guessed.map(index => prevState.gameList[index]));
      return {
        ...prevState,
        gameA: nextGameList[nextGameAIndex],
        gameB: nextGameList[nextGameBIndex],
        gameList: nextGameList,
        guessed: [],
      };
    });
  }

  return (
    <GameContainer>
      <ScoreContext.Provider value={score}>
        <Header />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <StyledBox display="flex" justifyContent="center">
                <LeftCard game={game} getNextGames={getNextGames} score={score} setScore={setScore} />
              </StyledBox>
            </Grid>
            <Grid item xs={6}>
              <StyledBox display="flex" justifyContent="center">
                <RightCard game={game} getNextGames={getNextGames} score={score} setScore={setScore} handleEndGame={handleEndGame}/>
              </StyledBox>
            </Grid>
          </Grid>
        )}
      </ScoreContext.Provider>
    </GameContainer>
  );
}

export default PlayGame;

// two cards(?) animation slide left, or maybe a shuffle animation? idk, want the transition from game on the right becoming game on the left smooth
// prob will not get ot this

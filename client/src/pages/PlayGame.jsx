import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";
import { NavLink } from "react-router-dom";

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

function PlayGame() {
  const { loading, data } = useQuery(FETCH_ALL_GAMES);
  let games = data?.fetchAllGames || [];

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
      console.log("setting game state", games);

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

  return (
    <GameContainer>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center">
              <LeftCard game={game} />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center">
              <RightCard game={game} />
            </Box>
          </Grid>
        </Grid>
      )}
    </GameContainer>
  );
}

export default PlayGame;

// two cards(?) animation slide left, or maybe a shuffle animation? idk, want the transition from game on the right becoming game on the left smooth

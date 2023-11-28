import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";
import { NavLink } from "react-router-dom";

import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";

import { Container, Button, Grid } from '@mui/material';

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
  // function setGameA() {
  //   let randomIndex = Math.floor(Math.random() * game.gameList.length);

  //   while (
  //     game.guessed.includes(randomIndex) ||
  //     games[randomIndex] === game.gameB
  //   ) {
  //     randomIndex = Math.floor(Math.random() * games.length);
  //   }

  //   const gameA = games[randomIndex];
  //   setGame((prevState) => ({
  //     ...prevState,
  //     gameA,
  //     guessed: [...prevState.guessed, randomIndex],
  //   }));
  // }

  // function setGameB() {
  //   let randomIndex = Math.floor(Math.random() * game.gameList.length);

  //   while (
  //     game.guessed.includes(randomIndex) ||
  //     game.gameList[randomIndex] === game.gameA
  //   ) {
  //     randomIndex = Math.floor(Math.random() * games.length);
  //   }
  //   const gameB = games[randomIndex];
  //   setGame((prevState) => ({
  //     ...prevState,
  //     gameB,
  //     guessed: [...prevState.guessed, randomIndex],
  //   }));
  // }

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
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LeftCard game={game} />
          </Grid>
          <Grid item xs={6}>
            <RightCard game={game} />
          </Grid>
          <Grid item xs={12}>
            
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default PlayGame;

// two cards(?) animation slide left, or maybe a shuffle animation? idk, want the transition from game on the right becoming game on the left smooth

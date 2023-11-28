import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";
import { NavLink } from "react-router-dom";
import LeftCard from "../components/LeftCard";
import RightCard from "../components/RightCard";
import { Container } from "@mui/material";

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
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="game-container">
          <LeftCard game={game} />
          <RightCard game={game} />
          <button onClick={getNextGames}>Next Games</button>
        </div>
      )}
    </Container>
  );
}

export default PlayGame;

// two cards(?) animation slide left, or maybe a shuffle animation? idk, want the transition from game on the right becoming game on the left smooth

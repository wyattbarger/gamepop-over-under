import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";
import { NavLink } from "react-router-dom";
import GameCard from "../components/GameCard";
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
  function setGameA() {
    let randomIndex = Math.floor(Math.random() * game.gameList.length);

    while (
      game.guessed.includes(randomIndex) ||
      games[randomIndex] === game.gameB
    ) {
      randomIndex = Math.floor(Math.random() * games.length);
    }

    const gameA = games[randomIndex];
    setGame((prevState) => ({
      ...prevState,
      gameA,
      guessed: [...prevState.guessed, randomIndex],
    }));
  }

  function setGameB() {
    let randomIndex = Math.floor(Math.random() * game.gameList.length);

    while (
      game.guessed.includes(randomIndex) ||
      game.gameList[randomIndex] === game.gameA
    ) {
      randomIndex = Math.floor(Math.random() * games.length);
    }
    const gameB = games[randomIndex];
    setGame((prevState) => ({
      ...prevState,
      gameB,
      guessed: [...prevState.guessed, randomIndex],
    }));
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
    <Container>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="game-container">
          <div className="game-card">
            <img
              src={`//images.igdb.com/igdb/image/upload/t_cover_big/${game.gameA?.cover.image_id}.jpg`}
              alt={game.gameA?.name}
            />
            <p>{game.gameA?.cover.image_id}</p>
            <a href={game.gameA?.url}>
              <p>{game.gameA?.name}</p>
            </a>
            <p>{game.gameA?.total_rating}</p>
          </div>
          <div className="game-card">
            <div className="game-card">
              <img
                src={`//images.igdb.com/igdb/image/upload/t_cover_big/${game.gameB?.cover.image_id}.jpg`}
                alt={game.gameB?.name}
              />
              <p>{game.gameB?.cover.image_id}</p>
              <a href={game.gameB?.url}>
                <p>{game.gameB?.name}</p>
              </a>
              <p>{game.gameB?.total_rating}</p>
            </div>
          </div>
        </div>
        // <div>
        //   {games.map((game, index) => {
        //     // console.log(game);
        //     return <div key={index}>
        //       <img
        //         src={`//images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
        //         alt={game.name}
        //       />
        //       <p>{game.cover.image_id}</p>
        //       <a href={game.url}>
        //         <p>{game.name}</p>
        //       </a>
        //       <p>{game.total_rating}</p>
        //     </div>;
        //   })}
        // </div>
      )}
    </Container>
  );
}

export default PlayGame;

// two cards(?) animation slide left, or maybe a shuffle animation? idk, want the transition from game on the right becoming game on the left smooth

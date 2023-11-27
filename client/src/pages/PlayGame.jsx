import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";
import { NavLink } from 'react-router-dom';
import GameCard from '../components/GameCard'
import { Container } from '@mui/material'

function PlayGame() {
  const { loading, data } = useQuery(FETCH_ALL_GAMES);
  const games = data?.fetchAllGames || [];
  console.log(data);

  return (
    <Container>
       {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {games.map((game, index) => {
            // console.log(game);
            return <div key={index}>
              <img
                src={`//images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
                alt={game.name}
              />
              <p>{game.cover.image_id}</p>
              <a href={game.url}>
                <p>{game.name}</p>
              </a>
              <p>{game.total_rating}</p>
            </div>;
          })}
        </div>
      )}
    </Container>
     
  );
}


export default PlayGame;

// two cards(?) animation slide left, or maybe a shuffle animation? idk, want the transition from game on the right becoming game on the left smooth
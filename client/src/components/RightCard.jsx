// game that has buttons to vote here
import { Card, CardContent, Typography, Grid, Button, CardHeader } from '@mui/material';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";



function RightCard({ game, getNextGames }) {
    const handleHigher = () => {
      if (game.gameB?.total_rating > game.gameA?.total_rating) {
        console.log("correct");
        getNextGames();
      } else {
        console.log("incorrect");
      }
    };
  
    const handleLower = () => {
      if (game.gameA?.total_rating > game.gameB?.total_rating) {
        console.log("correct");
        getNextGames();
      } else {
        console.log("incorrect");
      }
    };
  
    return (
        <Card>
          <CardHeader/>
          <CardContent>
            {/* image for game */}
          <a href={game.gameB?.url} target="_blank">
            <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.gameB?.cover.image_id}.jpg`} alt={game.gameB?.name}/>
            </a>
            
                {/* game name */}
              <Typography variant="body1">
                {game.gameB?.name}
              </Typography>
            
            {/* rating */}
            <Typography variant="body1">
              {game.gameB?.total_rating}
            </Typography>

            {/* buttons to vote */}
            <Button variant="contained" onClick={handleHigher}>
              Vote Higher
            </Button>

            <Button variant="contained" onClick={handleLower}>
              Vote Lower
            </Button>
          </CardContent>
        </Card>
      );
    }
    
    export default RightCard;
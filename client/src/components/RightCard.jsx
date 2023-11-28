// game that has buttons to vote here
import { Card, CardContent, Typography, Grid, Button, CardHeader } from '@mui/material';
import React from 'react';
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";

function RightCard({ game }) {
    const handleHigher = () => {
    };
  
    const handleLower = () => {
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
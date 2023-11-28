// component for our cards that will display: game title, game popularity
// card 2 will need the buttons for more/less popular
import { Card, CardContent, Typography, CardHeader } from '@mui/material';
import React from 'react';
import { useQuery } from "@apollo/client";
import { FETCH_ALL_GAMES } from "../utils/queries";

function LeftCard({ game }) {
  return (
    <Card>
      <CardHeader/>
      <CardContent>
        {/* image for game */}
      <a href={game.gameA?.url} target="_blank">
        <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.gameA?.cover.image_id}.jpg`} alt={game.gameA?.name}/>
        </a>
        
            {/* game name */}
          <Typography variant="body1">
            {game.gameA?.name}
          </Typography>
        
        {/* rating */}
        <Typography variant="body1">
          {game.gameA?.total_rating}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LeftCard;
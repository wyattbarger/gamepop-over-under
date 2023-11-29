// component for our cards that will display: game title, game popularity
// card 2 will need the buttons for more/less popular
import styled from "@emotion/styled";
import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';

// emotion styling
const StyledCard = styled(Card)`
  // sizing
  width: 350px;
  height: 575px;
  
  // coloring
  border: 4px solid #70ffdf; 
  background-color: #ff4df0;
`;

// emotion styling
const StyledImage = styled.img`
  // sizing
  width: 250px;
  height: 350px;

  // positioning
  display: block;
  margin: 0 auto;
`;

const CardText = styled.p`
  //centers text
  text-align: center;

`;

function LeftCard({ game }) {
  return (
    <StyledCard>
      <CardHeader />
      <CardContent>
        
        {/* image for the game */}
        <a href={game.gameA?.url} target="_blank" rel="noopener noreferrer">
          <StyledImage
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.gameA?.cover.image_id}.jpg`}
            alt={game.gameA?.name}
          />
        </a>

        {/* game name */}
        <CardText>
          {game.gameA?.name}
        </CardText>

        {/* rating */}
        <CardText>
          {game.gameA?.total_rating}
        </CardText>
      </CardContent>
    </StyledCard>
  );
}

export default LeftCard;
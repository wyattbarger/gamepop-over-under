// game that has buttons to vote here
import { Card, CardContent, CardHeader, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";

// emotion styling
const StyledCard = styled(Card)`
  // sizing
  width: 350px;
  height: 550px;
  
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

const ButtonContainer = styled.div`
  // centers buttons
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const HigherButton = styled(Button)`
    background-color: #70ffdf;
    color: #0D0D0D;
    margin-right: 25px;
    margin-top: 10px;
  `;

const LowerButton = styled(Button)`
    background-color: #70ffdf;
    color: #0d0d0d;
    margin-left: 25px;
    margin-top: 10px;
  `;

function RightCard({ game, getNextGames }) {
  const navigate = useNavigate();
    const handleHigher = () => {
      if (game.gameB?.total_rating > game.gameA?.total_rating) {
        console.log("correct");
        getNextGames();
      } else {
        console.log("incorrect");
        navigate('/end');
      }
    };
  
    const handleLower = () => {
      if (game.gameA?.total_rating > game.gameB?.total_rating) {
        console.log("correct");
        getNextGames();
      } else {
        console.log("incorrect");
        navigate('/end');
      }
    };
  
    return (
      <StyledCard>
        <CardHeader />
        <CardContent>
          
          {/* image for the game */}
          <a href={game.gameB?.url} target="_blank" rel="noopener noreferrer">
            <StyledImage
              src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.gameB?.cover.image_id}.jpg`}
              alt={game.gameB?.name}
            />
          </a>
  
          {/* game name */}
          <CardText>
            {game.gameB?.name}
          </CardText>
  
          {/* rating */}
          <CardText>
            {game.gameB?.total_rating}
          </CardText>

          <ButtonContainer>
          <HigherButton onClick={handleHigher}>
             Higher
          </HigherButton>
          <LowerButton onClick={handleLower}>
             Lower
          </LowerButton>
          </ButtonContainer>
        </CardContent>
      </StyledCard>
    );
  }
    
    export default RightCard;
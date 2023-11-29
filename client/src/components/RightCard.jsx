// game that has buttons to vote here
import { Card, CardContent, CardHeader, Button } from '@mui/material';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";

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

const ButtonContainer = styled.div`
  // centers buttons
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HigherButton = styled.button`
  background-color: #045ded;
  color: #70ffdf;
  font-size: 1rem;
  cursor: pointer;
  padding: 26px 14px;
  border-radius: 50%;
  border: 3px solid #1d269b;
  position: relative;
  right: 10%;


  :active {
    background-color: #2f5bbf;
    color: #4ec4b8;
    box-shadow: inset 0px 0px 5px rgba(30, 30, 30, 1);
  `;

const LowerButton = styled.button`
  background-color: #045ded;
  color: #70ffdf;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 50%;
  padding: 26px 14px;
  border: 3px solid #1d269b;
  position: relative;
  left: 10%;

  :active {
    background-color: #2f5bbf;
    color: #4ec4b8;
    box-shadow: inset 0px 0px 5px rgba(30, 30, 30, 1);
  `;

function RightCard({ game, getNextGames, score, setScore }) {
  const navigate = useNavigate();
    const handleHigher = () => {
      if (game.gameB?.total_rating > game.gameA?.total_rating) {
        console.log("correct");
        setScore(prevScore => prevScore + 1);
        console.log(score);
        getNextGames();
      } else {
        console.log("incorrect");
        navigate('/gameover');
      }
    };
  
    const handleLower = () => {
      if (game.gameA?.total_rating > game.gameB?.total_rating) {
        console.log("correct");
        setScore(prevScore => prevScore + 1);
        console.log(score);
        getNextGames();
      } else {
        console.log("incorrect");
        navigate('/gameover');
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
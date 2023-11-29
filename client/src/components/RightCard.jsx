// game that has buttons to vote here
import { Card, CardContent, CardHeader, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

// emotion styling
const StyledCard = styled(Card)`
  // sizing
  width: 350px;
  height: 575px;

  // coloring
  border: 4px solid #70ffdf;
  background-color: #ff4df0;

  // Mobile styling
  @media (max-width: 800px) {
    width: 280px;
    height: 425px;
  }
`;

// emotion styling
const StyledImage = styled.img`
  // sizing
  width: 250px;
  height: 350px;
  

  // coloring
  border: 2px solid #70ffdf;

  // positioning
  display: block;
  margin: 0 auto;

  // Mobile styling
  @media (max-width: 800px) {
    width: 150px;
    height: 210px;
  }
`;

const CardText = styled.p`
  //centers text
  text-align: center;
  font-size: 22px;

  // Mobile styling
  @media (max-width: 800px) {
    font-size: 18px;
`;

const ButtonContainer = styled.div`
  // centers buttons
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const HigherButton = styled.button`
  font-family: "Press Start 2P";
  background-color: #045ded;
  color: #f5f5f5;
  text-align: center;
  font-size: .65;
  margin: 10px 10px;
  padding: 36px 14px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #1d269b;
  transition: all 0.1s ease-in-out;

  position: relative;
  left: 15%;
  top: -5%;

:active {
  background-color: #045ded;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  transform: scale(0.97);
}

@media (max-width: 800px) {
  font-size: 8px; 
  padding: 12px 4px;  
  margin: 8px 2px;
  right: 3%; 
}
`;

const LowerButton = styled.button`
font-family: "Press Start 2P";
  background-color: #045ded;
  color: #f5f5f5;
  text-align: center;
  font-size: 1rempx;
  margin: 10px 10px;
  padding: 36px 14px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #1d269b;
  transition: all 0.1s ease-in-out;

  position: relative;
  right: 15%;
  top: 5%;

:active {
  background-color: #045ded;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  transform: scale(0.97);
}

@media (max-width: 800px) {
  font-size: 8px; 
  padding: 12px 4px;  
  margin: 8px 2px;
  left: 3%; 
} 
`;

function RightCard({ game, getNextGames, score, setScore, handleEndGame }) {
  const navigate = useNavigate();
  const handleHigher = () => {
    if (game.gameB?.total_rating > game.gameA?.total_rating) {
      console.log("correct");
      setScore((prevScore) => prevScore + 1);
      console.log(score);
      getNextGames();
    } else {
      console.log("incorrect");
      navigate("/gameover");
    }
  };

  const handleLower = () => {
    if (game.gameA?.total_rating > game.gameB?.total_rating) {
      console.log("correct");
      setScore((prevScore) => prevScore + 1);
      console.log(score);
      getNextGames();
    } else {
      console.log("incorrect");
      navigate("/gameover");
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
        <CardText>{game.gameB?.name}</CardText>

        {/* rating */}
        <CardText>{game.gameB?.total_rating}</CardText>

        <ButtonContainer>
          <LowerButton onClick={handleLower}>Less</LowerButton>
          <HigherButton onClick={handleHigher}>More</HigherButton>
        </ButtonContainer>
      </CardContent>
    </StyledCard>
  );
}

export default RightCard;

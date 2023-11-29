import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const GameoverCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 10px;
  padding: 20px;
`;

const CardTitle = styled.h1`
  color: #ff4df0;
  font-size: 10rem;
  white-space: nowrap;
  padding: 0 20px;
  text-shadow: 1px 3px 3px rgba(112, 255, 225, 1),
    1px 3px 3px rgba(255, 255, 255, 1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const HomeButton = styled.button`
  font-family: 'Press Start 2P';
  background-color: #ff4df0;
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  margin: 20px 10px;
  padding: 20px 12px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #70ffdf;
  width: 175px;
  height: 175px;
  transition: all 0.1s ease-in-out;

  :active {
    background-color: #d83ea8;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }
`;

const PlayAgainButton = styled.button`
font-family: 'Press Start 2P';
  background-color: #ff4df0;
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  margin: 20px 10px;
  padding: 20px 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #70ffdf;
  width: 175px;
  height: 175px;
  transition: all 0.1s ease-in-out;

  :active {
    background-color: #d83ea8;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }
`;

// Add the history prop to the EndMenu component, as indicated by react-router docs, so t.
function EndMenu() {
  return (
    <Container>
      <GameoverCard>
        <CardTitle>Game Over!</CardTitle>
        <ButtonContainer>
          <Link to="/">
            <HomeButton>Home</HomeButton>
          </Link>
          <Link to="/play">
            <PlayAgainButton>Play Again</PlayAgainButton>
          </Link>
        </ButtonContainer>
      </GameoverCard>
    </Container>
  );
}

export default EndMenu;

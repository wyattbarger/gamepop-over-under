import React from 'react';
import styled from "@emotion/styled";
import AuthService from "../utils/auth";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  border: 1px solid #008f11;
  margin: 10px;
  padding: 20px;
`;

const CardTitle = styled.h1`
  color: #008f11;
  font-size: 4rem;
  white-space: nowrap;
  padding: 0 20px;
  text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const HomeButton = styled.button`
  background-color: #008f11;
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  margin: 20px 10px;
  padding: 20px 12px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #005f0c;
  width: 120px;
  height: 120px;
  transition: all 0.1s ease-in-out;

  :active {
    background-color: #005f0c;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }
`;

const PlayAgainButton = styled.button`
  background-color: #008f11;
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  margin: 20px 10px;
  padding: 20px 12px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #005f0c;
  width: 120px;
  height: 120px;
  transition: all 0.1s ease-in-out;

  :active {
    background-color: #005f0c;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.5);
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
            <HomeButton>Home</HomeButton>
            <PlayAgainButton>Play Again</PlayAgainButton>
          </ButtonContainer>
      </GameoverCard>
    </Container>
  );
}

export default EndMenu;

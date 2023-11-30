import { React, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
  animation: ${(props) =>
      props.awaitFadeOut ? "fadeInAnimation" : "fadeOutAnimation"}
    ease 1.2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOutAnimation {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const CardTitle = styled.h1`
  color: #ff4df0;
  font-size: 10rem;
  white-space: nowrap;
  padding: 0 20px;
  text-shadow: 2px 5px 3px rgba(112, 255, 225, 1),
               2px 5px 3px rgba(255, 255, 255, 1);

  @media (max-width: 800px) {
    font-size: 3rem;
  }
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

  @media (max-width: 800px) {
    font-size: 16px;
    padding: 15px 10px;
    width: 150px;
    height: 150px;
    margin: 10px 5px;
  }

  :active {
    background-color: #d83ea8;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }

  :hover {
    box-shadow: 0 0 10px #70ffdf;
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

  @media (max-width: 800px) {
    font-size: 16px;
    padding: 15px 10px;
    width: 150px;
    height: 150px;
    margin: 10px 5px;
  }


  :active {
    background-color: #d83ea8;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
    transform: scale(0.95);
  }

  :hover {
    box-shadow: 0 0 10px #70ffdf;
  }
`;

// Add the history prop to the EndMenu component, as indicated by react-router docs, so t.
function EndMenu() {
  const [awaitFadeOut, setAwaitFadeOut] = useState(true);
  const navigate = useNavigate();
  const buttonLinkFunction = (route) => {
    setAwaitFadeOut(false);
    setTimeout(() => navigate(route), 1200);
  };
  return (
    <Container>
      <GameoverCard awaitFadeOut={awaitFadeOut}>
        <CardTitle>Game Over!</CardTitle>
        <ButtonContainer>
            <HomeButton onClick={() => buttonLinkFunction('/')}>Home</HomeButton>
            <PlayAgainButton onClick={() => buttonLinkFunction('/play')}>Play Again</PlayAgainButton>
        </ButtonContainer>
      </GameoverCard>
    </Container>
  );
}

export default EndMenu;

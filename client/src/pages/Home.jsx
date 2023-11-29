import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

// Width of 1000px will match containers on Signup.jsx and Login.jsx, if we want them to be consistent, I left it out of this commit in case there were conflicting opinions on it.
const InsideContainer = styled.div`
  border: 1px solid #008f11;
  background-color: #0d0d0d;
  margin: 10px;
  padding: 20px;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #008f11;
  font-size: 8rem;
  text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
`;

const StartButton = styled.button`
  background-color: #008f11;
  color: #f5f5f5;
  text-align: center;
  font-size: 20px;
  margin: 10px 10px;
  padding: 20px 12px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #005f0c;

  :active {
    background-color: #005f0c;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const Home = () => {
  console.log("howdy pardner");

  const StartGame = () => {
    // Add logic for starting the game
    console.log("start pressed");
  };

  return (
    <Container>
      <Header />
      <InsideContainer>
        <Title>Game Pop</Title>
        <Link to="/play">
          <StartButton onClick={StartGame}>Start</StartButton>{" "}
        </Link>
      </InsideContainer>
      <Footer />
    </Container>
  );
};

export default Home;

import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Container = styled.div`
//  functionally doing nothing right now
`;

const InsideContainer = styled.div`
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #ff4df0;
  font-size: 10rem;
  
  text-shadow: 1px 3px 3px rgba(112, 255, 225, 1),
               1px 3px 3px rgba(255, 255, 255, 1);
`;

const StartButton = styled.button`
  background-color: #ff4df0;
  color: #70ffdf;
  text-align: center;
  font-size: 24px;
  margin: 10px 10px;
  padding: 36px 26px; 
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #70ffdf;

  :active {
    background-color: #d83ea8;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;


const Home = () => {
  console.log("howdy pardner");

  const StartGame = () => {
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

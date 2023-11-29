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
  
  text-shadow: 2px 5px 3px rgba(112, 255, 225, 1),
               2px 5px 3px rgba(255, 255, 255, 1);
`;

const StartButton = styled.button`
  font-family: 'Press Start 2P';
  background-color: #ff4df0;
  color: #f5f5f5;
  text-align: center;
  font-size: 18px;
  margin: 10px 10px;
  padding: 50px 20px;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid #70ffdf;
  transition: all 0.1s ease-in-out;

  :active {
    background-color: #ff4df0;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
    transform: scale(0.97);
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

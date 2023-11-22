import { useQuery } from '@apollo/client';
import { FETCH_ALL_GAMES} from '../utils/queries';
import styled from '@emotion/styled';

// const Container = styled.div
// `
//     background-color: #0D0D0D ;
//     border: 4px solid #008F11;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     overflow: hidden;
// `;

const InsideContainer = styled.div
`   
    border: 1px solid #008F11;
    background-color: #0D0D0D;
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1
`   
    color: #008F11;
    font-size: 8rem;
    text-shadow: 3px 4px 4px rgba(0, 255, 65, 1);
`;

const StartButton = styled.button
`
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
    console.log('howdy pardner');
    const { loading, data } = useQuery(FETCH_ALL_GAMES);
    const games = data?.fetchAllGames || [];
    console.log(data);


    const StartGame = () => {
        // Add logic for starting the game
        console.log('start pressed');
      };

    return (
        // <Container>
        <InsideContainer>
        <Title>Game Pop</Title>
            {loading ? (
            <div>Loading...</div>
            ) : (
            <div>
                {games.map((game) => (
                <div key={game._id}>
                    <p>{game.name}</p>
                    <p>{game.total_rating}</p>
                </div>
                ))}
            </div>
            )}
            <StartButton onClick={StartGame}>Start</StartButton>
            
        </InsideContainer>
        // </Container>
    );
    };

export default Home;

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
    border: 1px solid #ff0276;
    background-color: #0D0D0D;
    padding: 20px;
    text-align: center;
`;

const Title = styled.h1
`   
    color: #ff4df0;
    font-size: 9rem;
    text-shadow: 4px 4px 6px rgba(255, 100, 200, .7);
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
                    <img src={`//images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`} alt={game.name} />
                    <p>{game.cover.image_id}</p>
                    <a href={game.url}><p>{game.name}</p></a>
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

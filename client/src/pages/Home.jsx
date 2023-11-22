import { useQuery } from '@apollo/client';
import { FETCH_ALL_GAMES} from '../utils/queries';

const Home = () => {
    console.log('howdy pardner');
    const { loading, data } = useQuery(FETCH_ALL_GAMES);
    const games = data?.fetchAllGames || [];
    console.log(data);

    return (
        <div>
        <h1>Home Page</h1>
        <div>
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
        </div>
        </div>
    );
    };

export default Home;

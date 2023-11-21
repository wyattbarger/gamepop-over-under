import { useQuery } from '@apollo/client';
import { FETCH_ALL_GAMES} from '../utils/queries';

const Home = () => {
    console.log('howdy pardner');
    const { loading, data } = useQuery(FETCH_ALL_GAMES);
    const games = data?.games || [];
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
                    <p>{game.name}</p>
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

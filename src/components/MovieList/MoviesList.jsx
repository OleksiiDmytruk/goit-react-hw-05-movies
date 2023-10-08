import { Poster } from 'components/Poster/Poster';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>
            <Poster path={poster_path} width={200} />
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

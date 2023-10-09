import { Poster } from 'components/Poster/Poster';
import { Link } from 'react-router-dom';
import { List, Item, Title } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`}>
            <Poster path={poster_path} width={250} />
            <Title>{title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};

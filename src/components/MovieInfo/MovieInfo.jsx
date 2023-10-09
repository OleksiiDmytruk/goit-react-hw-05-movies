import { Poster } from 'components/Poster/Poster';
import { Info, Wraper } from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const { overview, poster_path, title, release_date, popularity } = movie;
  return (
    <Wraper>
      <Poster path={poster_path} width={400} />
      <Info>
        <h2>{title}</h2>
        <p>Popularity: {popularity} %</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <p>Release date:{release_date}</p>
      </Info>
    </Wraper>
  );
};

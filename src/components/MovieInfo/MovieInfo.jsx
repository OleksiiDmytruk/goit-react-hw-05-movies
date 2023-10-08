import { Poster } from 'components/Poster/Poster';

export const MovieInfo = ({ movie }) => {
  const { overview, poster_path, title, release_date, popularity } = movie;
  return (
    <div>
      <Poster path={poster_path} width={400} />
      <div>
        <h2>{title}</h2>
        <p>Popularity: {popularity} %</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <p>Release date:{release_date}</p>
      </div>
    </div>
  );
};

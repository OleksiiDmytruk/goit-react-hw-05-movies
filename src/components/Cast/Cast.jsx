import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/api';
import { useParams } from 'react-router-dom';
import { Poster } from 'components/Poster/Poster';
import { List } from './Cast.styled';

export const Cast = () => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoader(true);
    const controller = new AbortController();
    const signal = { signal: controller.signal };
    async function getMovieCast() {
      try {
        const cast = await getMovieCredits(movieId, signal);
        setCredits(cast);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(toast.error('Oops! Something went wrong...'));
        }
      } finally {
        setLoader(false);
      }
    }
    getMovieCast();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {credits.length !== 0 && !error && (
        <List>
          {credits.map(({ name, profile_path }) => (
            <li key={name}>
              <Poster path={profile_path} width={150} />
              <h4>{name}</h4>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

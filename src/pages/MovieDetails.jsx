import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import { useEffect, useState, useRef } from 'react';
import { getMovieDetails } from 'components/api';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { GoBack } from 'components/GoBack/GoBack';

export const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const controller = new AbortController();
    const signal = { signal: controller.signal };
    setLoader(true);

    async function getMovieInfo() {
      try {
        const movie = await getMovieDetails(movieId, signal);
        setMovie(movie);
        console.log(movie);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(toast.error('Oops! Something went wrong...'));
        }
      } finally {
        setLoader(false);
      }
    }
    getMovieInfo();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {movie && !error && (
        <main>
          <GoBack path={backLink.current} />
          <MovieInfo movie={movie} />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
            <Outlet />
          </ul>
        </main>
      )}
    </>
  );
};

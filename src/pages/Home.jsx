import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MoviesList';
import { getTrendMovies } from 'components/api';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = { signal: controller.signal };
    setLoader(true);

    async function getMovies() {
      try {
        const movies = await getTrendMovies(signal);
        setTrendMovies(movies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(toast.error('Oops! Something went wrong...'));
        }
      } finally {
        setLoader(false);
      }
    }
    getMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {loader && <Loader />}
      {trendMovies.length !== 0 && !error && (
        <main>
          <h1>Trending movies today</h1>
          <MoviesList movies={trendMovies} />
        </main>
      )}
    </>
  );
};

export default Home;

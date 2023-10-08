import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MoviesList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { getSearchMovies } from 'components/api';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    searchParams.set('query', evt.target.query.value);
    setSearchParams(searchParams);
  };
  const controllerRef = useRef();

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function getMovies() {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = new AbortController();
      const signal = { signal: controllerRef.current.signal };
      try {
        setLoader(true);
        const movies = await getSearchMovies(query, signal);
        setSearchMovies(movies);
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
      controllerRef.current.abort();
    };
  }, [query]);

  return (
    <main>
      <SearchForm getSearch={handleSubmit} />
      {loader && <Loader />}
      {searchMovies.length !== 0 && !error && (
        <MoviesList movies={searchMovies} />
      )}
    </main>
  );
};

import { Loader } from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'components/api';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    setLoader(true);
    const controller = new AbortController();
    const signal = { signal: controller.signal };
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId, signal);
        setReviews(reviews);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          setError(toast.error('Oops! Something went wrong...'));
        }
      } finally {
        setLoader(false);
      }
    }
    getReviews();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      {loader && <Loader />}
      {reviews.length === 0 && <h4>Unfortunately, nothing was found</h4>}
      {reviews.length !== 0 && !error && (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

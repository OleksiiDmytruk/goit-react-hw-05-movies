import { Route, Routes, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <GlobalStyle />
      <Toaster />
    </>
  );
};

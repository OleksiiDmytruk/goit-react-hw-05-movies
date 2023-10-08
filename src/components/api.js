import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  language: 'en-US',
  api_key: 'b7985b2ac636139bd91d7084fe7c1023',
};

export const getTrendMovies = async signal => {
  const respons = await axios.get('trending/movie/day', signal);
  return respons.data.results;
};

export const getSearchMovies = async (query, signal) => {
  const respons = await axios.get(`search/movie?query=${query}`, signal);
  return respons.data.results;
};

export const getMovieDetails = async (id, signal) => {
  const respons = await axios.get(`movie/${id}`, signal);
  return respons.data;
};

export const getMovieCredits = async (id, signal) => {
  const respons = await axios.get(`movie/${id}/credits`, signal);
  return respons.data.cast;
};

export const getMovieReviews = async (id, signal) => {
  const respons = await axios.get(`movie/${id}/reviews`, signal);
  return respons.data.results;
};

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = 'd09efe7116463b03d38eef6e936584d9';

export const fetchHomepage = async () =>
  await axios.get(`trending/movie/day?api_key=${key}`);

export const fetchMovieId = async movieId =>
  await axios.get(`movie/${movieId}?api_key=${key}`);

export const fetchFindMovies = async query =>
  await axios.get(`search/movie?query=${query}&api_key=${key}`);

export const fetchCast = async movieId =>
  await axios.get(`movie/${movieId}/credits?api_key=${key}`);

export const fetchReviews = async movieId =>
  await axios.get(`movie/${movieId}/reviews?api_key=${key}`);

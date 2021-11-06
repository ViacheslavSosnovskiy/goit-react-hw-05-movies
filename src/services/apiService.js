import axios from "axios";

// https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false
const KEY = "42d598709b0517212023a74116f4ecb9";
const BASE_URL = "https://api.themoviedb.org/3";
const TRENDING = "/trending/movie/week";
const SEARCH = "/search/movie";

// ${BASE_URL}trending/all/day?api_key=<<api_key>>&page
export async function getPopularMovies(page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${TRENDING}?api_key=${KEY}&page=${page}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

// ${BASE_URL}search/movie?api_key=${KEY}&page=1
export async function getMovieSearch(movie, page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}${SEARCH}?api_key=${KEY}&page=${page}&query=${movie}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
// ${BASE_URL}movie/{movie_id}?api_key=${KEY}
export async function getMovieById(movie_id) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}?api_key=${KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

// ${BASE_URL}movie/{movie_id}/credits?api_key=${KEY}
export async function fetchCast(movie_id) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}/credits?api_key=${KEY}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

// ${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY}&page=1
export async function fetchReviews(movie_id) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}movie/${movie_id}/reviews?api_key=${KEY}&page=1`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import MovieList from "../../components/movieList/MovieList";
import LoadMoreButton from "../../components/loadMoreButton/LoadMoreButton";

import * as movieApi from "../../services/apiService";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = () => {
    setStatus("pending");

    movieApi.getPopularMovies(page).then((response) => {
      const data = response.result;
      setMovies((prevMovies) => [...prevMovies, ...data]);
    });
    setPage((prevPage) => prevPage + 1);

    if (page !== 1) {
      scroll();
    }
    setStatus("resolved");
  };

  const loadMorePopularMovies = () => {
    getPopularMovies();
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const showLoadMore = movies.length > 0 && movies.length >= 12;
  return (
    <>
      {status === "pending" && (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {movies ? (
        <MovieList movies={movies} url={"movies"} location={"/"} />
      ) : (
        <h2>No movies found!</h2>
      )}
      {showLoadMore && <LoadMoreButton onLoadMore={loadMorePopularMovies} />}
    </>
  );
}

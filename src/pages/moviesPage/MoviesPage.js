import { useState, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import * as apiService from "../../services/apiService";
import MovieList from "../../components/movieList/MovieList";
import Form from "../../components/form/Form";
import LoadMoreButton from "../../components/loadMoreButton/LoadMoreButton";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  const query = new URLSearchParams(location.search).get("query");

  const [userQuery, setUserQuery] = useState(query ?? "");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!userQuery) {
      return;
    }

    getSearchQuery();
  }, [userQuery]);

  const getSearchQuery = () => {
    setStatus("pending");

    apiService.getMovieSearch(userQuery, page).then((response) => {
      const data = response.results;
      setMovies((prevMovies) => [...prevMovies, ...data]);
    });
    setPage((prevPage) => prevPage + 1);
    setStatus("resolved");

    if (page !== 1) {
      scroll();
    }
  };

  const handleQuery = (newQuery) => {
    if (newQuery === userQuery) {
      return;
    }
    setUserQuery(newQuery);
    setMovies([]);
    setPage(1);

    history.push({
      ...location,
      search: `query=${newQuery}`,
    });
  };

  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const onLoadMore = () => {
    getSearchQuery();
  };

  const showLoadMore = movies.length > 0 && movies.length >= 19;
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
      <Form searchHandler={handleQuery} />
      <MovieList movies={movies} url={url} location={location} />
      {showLoadMore && <LoadMoreButton onLoadMore={onLoadMore} />}
      {/* <ToastContainer /> */}
    </>
  );
}

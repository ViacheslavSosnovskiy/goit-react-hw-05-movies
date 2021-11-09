import { useState, useEffect, lazy, Suspense } from "react";
import { useRouteMatch, Route } from "react-router-dom";
import * as apiService from "../../services/apiService";
import MovieCard from "../../components/movieCard/MovieCard";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// lazy
const Cast = lazy(() =>
  import("./cast/Cast" /* webpackChunkName: "cast-page" */)
);

const Reviews = lazy(() =>
  import("./reviews/Reviews" /* webpackChunkName: "reviews-page" */)
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("idle");

  const match = useRouteMatch();
  const { path } = useRouteMatch();
  const { movieId } = match.params;
  console.log("match.params", match.params);

  useEffect(() => {
    getMovieInfo();
  }, []);

  const getMovieInfo = () => {
    setStatus("pending");
    apiService.getMovieById(movieId).then((response) => {
      setMovie(response);
    });
    setStatus("resolved");
  };

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
      {movie && <MovieCard movie={movie} />}
      <hr />
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        }
      >
        <Route exact path={`${path}/cast`}>
          {movie && <Cast />}
        </Route>
        <Route exact path={`${path}/reviews`}>
          {movie && <Reviews />}
        </Route>
      </Suspense>
    </>
  );
}

import { useState, useEffect, lazy, Suspense } from "react";
import { useRouteMatch, Router } from "react-router-dom";
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

  // const { url } = useRouteMatch();
  // const location = useLocation();

  // const { slug } = useParams();
  // const movieId = slug.match(/[a-z0-9]+$/)[0];
  return (
    <>
      {/* <div>
        <NavLink
          to={{
            pathname: url + "/cast",
            state: { ...location.state, id: movieId },
          }}
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: url + "/reviews",
            state: { ...location.state, id: movieId },
          }}
        >
          Reviews
        </NavLink>
      </div> */}
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
        <Router exact path={`${path}/cast`}>
          {movie && <Cast />}
        </Router>
        <Router exact path={`${path}/reviews`}>
          {movie && <Reviews />}
        </Router>
      </Suspense>
    </>
  );
}

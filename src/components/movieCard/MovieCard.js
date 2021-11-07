// import { useLocation, useRouteMatch, Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  // const { url } = useRouteMatch();
  // const location = useLocation();

  const imageUrl = "https://image.tmdb.org/t/p/w200" + movie.poster_path;
  return (
    <>
      <div>
        {/* <button tupe="button">Close</button> */}

        <div>
          <img src={imageUrl} alt={movie.title} />
        </div>

        <div>
          {movie.title && <h2>{movie.title}</h2>}
          {movie.release_date && <p>{movie.release_date}</p>}
          {movie.vote_average && <p>{movie.vote_average}</p>}
          {movie.overview && <p>{movie.overview}</p>}
        </div>
      </div>
      <div>
        {/* <Link
          to={{
            pathname: `${url}/cast`,
            state: { from: location.state ? location.state.from : "/" },
          }}
        >
          Cast
        </Link>
        <Link
          to={{
            pathname: `${url}/reviews`,
            state: { from: location.state ? location.state.from : "/" },
          }}
        >
          Reviews
        </Link> */}
      </div>
    </>
  );
}

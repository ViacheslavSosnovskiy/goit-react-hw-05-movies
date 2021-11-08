import {
  useLocation,
  useRouteMatch,
  useHistory,
  NavLink,
} from "react-router-dom";

export default function MovieCard({ movie }) {
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const { title, release_date, vote_average, poster_path, overview } = movie;

  const buttonBack = () => {
    history.push(location?.state?.from ?? "/movies");
  };

  const imageUrl = "https://image.tmdb.org/t/p/w200" + poster_path;
  return (
    <>
      <div>
        <button tupe="button" onClick={buttonBack}>
          Back
        </button>

        <div>
          <img src={imageUrl} alt={title} />
        </div>

        <div>
          {title && <h2>{title}</h2>}
          {release_date && <p>{release_date}</p>}
          {vote_average && <p>{vote_average}</p>}
          {overview && <p>{overview}</p>}
        </div>
      </div>
      <div>
        <NavLink
          to={{
            pathname: `${url}/cast`,
            state: { from: location.state ? location.state.from : "/" },
          }}
        >
          Cast
        </NavLink>
        <NavLink
          to={{
            pathname: `${url}/reviews`,
            state: { from: location.state ? location.state.from : "/" },
          }}
        >
          Reviews
        </NavLink>
      </div>
    </>
  );
}

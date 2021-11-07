import { NavLink } from "react-router-dom";

export default function MovieList({ movies, url, location }) {
  console.log(movies);
  return (
    <>
      <ul>
        {movies.map(
          ({ id, title, poster_path, release_date, vote_average }) => (
            <li key={id}>
              <NavLink
                to={{
                  pathname: `${url}/${id}`,
                  state: { from: location },
                }}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200` + poster_path}
                    alt={title}
                  />
                  <div>
                    <h2>{title}</h2>
                    {vote_average && <p>⭐️{vote_average}</p>}
                    {release_date && <p>{release_date.slice(0, 4)}</p>}
                  </div>
                </div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </>
  );
}

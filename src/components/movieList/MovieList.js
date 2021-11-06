import { NavLink, useRouterMatch } from "react-router-dom";
// import {useRouterMatch} from 'react-router-dom'

export default function MovieList({ movies, url, location }) {
  console.log(movies);
  // const {url} = useRouterMatch()
  return (
    <>
      <ul>
        {movies.map(({ id, title, poster_path, release_date }) => (
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
                  {release_date && <span>{release_date.slice(0, 4)}</span>}
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as apiService from "../../../services/apiService";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [status, setStatus] = useState("idle");

  const { movieId } = useParams;
  console.log("movieId", movieId);

  useEffect(() => {
    getDataActors();
  }, []);

  const getDataActors = () => {
    setStatus("pending");

    apiService.fetchCast(movieId).then((response) => {
      setActors(response.cast);
    });
    setStatus("resolved");
    scroll();
  };
  const scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
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

      {actors && (
        <div>
          <ul>
            {actors.map(({ name, id, profile_path, popularity }) => (
              <li key={id}>
                <img
                  src={"https://image.tmdb.org/t/p/w300" + profile_path}
                  alt={name}
                />
                <h3>{name}</h3>
                <p>{popularity}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

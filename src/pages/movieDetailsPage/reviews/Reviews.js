import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as apiService from "../../../services/apiService";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("idle");

  const { movieId } = useParams();

  useEffect(() => {
    getDataReviews();
  }, []);

  const getDataReviews = () => {
    setStatus("pending");

    apiService.fetchReviews(movieId).then((response) => {
      setReviews(response.results);
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

      {reviews && (
        <div>
          <ul>
            {reviews.map(({ author, id, content, url }) => (
              <li key={id}>
                <a href={url}>More detail</a>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

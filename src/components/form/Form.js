import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form({ searchHandler }) {
  const [query, setQuery] = useState("");

  const onInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return toast.error("Введите корректно!");
    }

    searchHandler(query);
    resetQuery();
  };

  const resetQuery = () => {
    setQuery("");
  };

  return (
    <>
      <form className="SearchForm" onSubmit={onSubmitForm}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={query}
          onChange={onInputChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <ToastContainer />
    </>
  );
}

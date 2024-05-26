import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
  const handleChange = (e) => {
    props.setSearchedMovie(e.target.value);
  };

  const handleClick = () => {
    props.fetchSearch();
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          className="search"
          type="text"
          placeholder="Search for movies"
          onChange={handleChange}
        />
      </div>
      <button className="search-btn" onClick={handleClick}>
        <Link to={"/search-results/" + props.searchedMovie}>Search</Link>
      </button>
    </div>
  );
};

export default Search;

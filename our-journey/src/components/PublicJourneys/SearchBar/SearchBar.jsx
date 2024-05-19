import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <h2>Explore Journeys</h2>
      <div>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBar;

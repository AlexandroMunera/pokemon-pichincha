import React from "react";
import { ReactComponent as SearchIcon } from "../../images/searchIcon.svg";
import "./style.scss";

export const SearchBar = () => {
  return (
    <div className="searchBox">
      <SearchIcon className="iconSearch" /> <input className='searchInput' type="text" placeholder="Buscar" />
    </div>
  );
};

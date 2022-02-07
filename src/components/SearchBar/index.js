import React from "react";
import { ReactComponent as SearchIcon } from "../../images/searchIcon.svg";
import "./style.scss";

export const SearchBar = ({handlerSearch}) => {
  const handlerKeyDown = (e) => {
    if (e.key === "Enter") handlerSearch(e.target.value);
  };

  return (
    <div className="searchBox">
      <SearchIcon className="iconSearch" />{" "}
      <input
        onKeyDown={handlerKeyDown}
        className="searchInput"
        type="text"
        placeholder="Buscar"
      />
    </div>
  );
};

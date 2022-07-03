import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        onChange={(event) => {
          handleSearchNote(event.target.value);
        }}
        placeholder="Search here"
      />
    </div>
  );
}

export default Search;

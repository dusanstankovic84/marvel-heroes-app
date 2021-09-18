// SEARCH BAR
import { useState } from "react";
import React from "react";
const SearchBar = ({ search }) => {
  const [text, setText] = useState("");
  const onSearch = (q) => {
    setText(q);
    search(q);
  };
  return (
    <div className="searchBox">
      <input
        className=""
        type="text"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
        value={text}
      />
      <button>Go</button>
    </div>
  );
};
export default SearchBar;
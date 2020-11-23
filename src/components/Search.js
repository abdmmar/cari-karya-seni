import React, { useState } from "react";

const Search = ({ setQuery, setPage, setList, worksCount }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    setList([]);
    setQuery(`q=${searchTerm}&page=`);
    setPage(1);
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleOnSubmit}>
        <input
          type="search"
          id="search"
          placeholder="Cari berdasarkan kata kunci, judul atau seniman"
          className="search"
          value={searchTerm}
          onChange={handleOnChange}
        />
      </form>
      <p className="workCount">Showing {worksCount} Works</p>
    </div>
  );
};

export default Search;

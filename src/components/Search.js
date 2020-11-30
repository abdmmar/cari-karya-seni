import React, { useState, useEffect } from "react";

const Search = ({ setQuery, setPage, setList, worksCount }) => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("searchValue") || ""
  );

  useEffect(() => {
    localStorage.setItem("searchValue", searchTerm);
  }, [searchTerm]);

  const handleOnSubmit = (event) => {
    event.preventDefault();

    setList([]);
    setQuery(`keyword=${searchTerm}&page=`);
    setPage(1);
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-box">
      <form onSubmit={handleOnSubmit} method="POST">
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

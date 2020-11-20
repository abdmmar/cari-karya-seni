import React, { useState } from 'react';

const Search = ({onSubmit}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleOnSubmit = (event) => {
      event.preventDefault();
  
      onSubmit(`q=${searchTerm}&size=50`);
    };
  
    const handleOnChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
        <form onSubmit={handleOnSubmit}>
          <label htmlFor="search">
            <h2>Telusuri Koleksi Karya Seni</h2>
          </label>
          <input
            type="search"
            id="search"
            placeholder="Cari berdasarkan kata kunci, judul atau seniman"
            className="search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
    )
}

export default Search;
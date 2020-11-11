import React, { useState, useEffect } from "react";

import Art from "./components/art";

const API_KEY = `apikey=${process.env.REACT_APP_API_KEY}&`;

const GET_ALL_CLASSS = `https://api.harvardartmuseums.org/classification?size=59${API_KEY}`;
const GET_OBJECT = "https://api.harvardartmuseums.org/object?";

function App() {
  const [art, setArt] = useState([]);
  const [worksCount, setWorksCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getArts('classification=any&size=50')
  }, []);

  const getArts = (query) => {
    fetch(`${GET_OBJECT}${API_KEY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        setArt(data.records);
        setWorksCount(data.info.totalrecords);
      });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    getArts(`q=${searchTerm}&size=50`);
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main>
      <header className="search-box">
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
      </header>
      <p className="workCount">Showing {worksCount} Works</p>
      <div className="art-container">
        {art.map(
          (art) =>
            art.primaryimageurl && <Art key={art.id} id={art.id} data={art} />
        )}
      </div>
    </main>
  );
}

export default App;

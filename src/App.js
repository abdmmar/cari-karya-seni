import React, { useState, useEffect } from "react";

import ArtList from "./components/ArtList";
import Search from "./components/Search";

const API_KEY = `apikey=${process.env.REACT_APP_API_KEY}&`;

// const GET_ALL_CLASSS = `https://api.harvardartmuseums.org/classification?size=59${API_KEY}`;
const GET_OBJECT = "https://api.harvardartmuseums.org/object?";

function App() {
  const [art, setArt] = useState([]);
  const [worksCount, setWorksCount] = useState(0);
  

  useEffect(() => {
    getArts("classification=any&size=50");
  }, []);

  const getArts = (query) => {
    fetch(`${GET_OBJECT}${API_KEY}${query}`)
      .then((response) => response.json())
      .then((data) => {
        setArt(data.records);
        setWorksCount(data.info.totalrecords);
      });
  };

  return (
    <main>
      <header className="search-box">
        <Search onSubmit={getArts}/>
      </header>
      <p className="workCount">Showing {worksCount} Works</p>
      <ArtList list={art} />
    </main>
  );
}

export default App;

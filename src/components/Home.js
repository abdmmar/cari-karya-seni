import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Search";
import Loader from "./Loader";
import ArtList from "./ArtList";

const API_KEY = `apikey=${process.env.REACT_APP_API_KEY}&`;

// const GET_ALL_CLASSS = `https://api.harvardartmuseums.org/classification?size=59${API_KEY}`;
const GET_OBJECT = "https://api.harvardartmuseums.org/object?";

const Home = () => {
  const [list, setList] = useState([]);
  const [worksCount, setWorksCount] = useState(0);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState("classification?&size=20&page=");

  useEffect(() => {
    const getArts = (query, page) => {
      fetch(`${GET_OBJECT}${API_KEY}${query}${page}`)
        .then((response) => response.json())
        .then(({ info, records }) => {
          setList((l) => [...l, ...records]);
          setWorksCount(info.totalrecords);
          page <= info.pages ? setHasMore(true) : setHasMore(false);
        });
    };

    getArts(query, page);
  }, [query, page]);

  return (
    <>
      <Search
        className="search-box"
        setQuery={setQuery}
        setPage={setPage}
        setList={setList}
        worksCount={worksCount}
      />
      <InfiniteScroll
        dataLength={list.length}
        next={() => setPage(page + 1)}
        hasMore={hasMore}
        loader={<Loader />}
        className="art-container"
      >
        {<ArtList list={list} />}
      </InfiniteScroll>
    </>
  );
};

export default Home;

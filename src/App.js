import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main>
      <header>
        <a href="/" onClick={() => localStorage.setItem("searchValue", "")}>
          <h2>Cari Karya Seni</h2>
        </a>
      </header>
      <Router>
        <Home path="/" exact />
        <Details path="/details/:id" />
        <NotFound default />
      </Router>
    </main>
  );
}

export default App;

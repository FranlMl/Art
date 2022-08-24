import "./App.css";
import data from "./data.json";
import Artist from "./compos/Artiste";

import Home from "./compos/Home"


import "./index.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Artists from "./compos/Artists";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/artist/:id" element={<Artist />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

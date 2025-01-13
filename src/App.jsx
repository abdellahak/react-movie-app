import { useState } from "react";
import "./App.css";
import "./index.css";
import MovieCard from "./components/MovieCard";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

function Text({ display }) {
  return (
    <div>
      <p>{display} </p>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./components/pages/Home";
import Favorites from "./components/pages/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="box-border p-0 m-0">
      <NavBar />
      <main className="flex-1 box-border w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
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

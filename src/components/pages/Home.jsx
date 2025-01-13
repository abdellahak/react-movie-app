import MovieCard from "../MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Inception", release_date: "2010" },
    { id: 2, title: "The Dark Knight", release_date: "2008" },
    { id: 3, title: "Interstellar", release_date: "2014" },
    { id: 4, title: "Avengers: Endgame", release_date: "2019" },
    { id: 5, title: "Parasite", release_date: "2019" },
    { id: 6, title: "The Godfather", release_date: "1972" },
    { id: 7, title: "The Shawshank Redemption", release_date: "1994" },
    { id: 8, title: "Pulp Fiction", release_date: "1994" },
    { id: 9, title: "The Lord of the Rings", release_date: "2003" },
    { id: 10, title: "Joker", release_date: "2019" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-form">
          Search
        </button>
      </form>
      <div className="movies-grid">
      {
        movies.filter((movie)=> movie.title.toLowerCase().includes(searchQuery.toLowerCase())).map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}

export default Home;

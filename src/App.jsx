import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const handlekeydown = (event) => {
    if (event.key === "Enter") {
      searchMovies(searchTerm);
    }
  }
  const movieland= () => {
    searchMovies("")

  }
  
  
  

  const handleBlur = () => {
    setSearchTerm("");
  }



  useEffect(() => {
    searchMovies("");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <div className="title">
      <h1 onClick={movieland}  >MOVIE REPO</h1>
      
      </div>
      <h2>Find your favorite movies</h2>

      <div className="search">
        <input
          value={searchTerm}
          onBlur={handleBlur}
         
          onKeyDown={handlekeydown}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

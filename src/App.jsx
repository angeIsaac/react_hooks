// src/App.js

import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    { title: 'Inception', description: 'A mind-bending thriller', imgSrc: 'https://via.placeholder.com/150', rating: 8.8 },
    { title: 'The Matrix', description: 'A sci-fi classic', imgSrc: 'https://via.placeholder.com/150', rating: 8.7 },
  ]);

  const [filter, setFilter] = useState({ title: '', rating: '' });

  const handleAddMovie = () => {
    const newMovie = {
      title: prompt('Enter movie title:'),
      description: prompt('Enter movie description:'),
      imgSrc: prompt('Enter movie image URL:'),
      rating: parseFloat(prompt('Enter movie rating:')),
    };
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filter.title.toLowerCase());
    const ratingMatch = filter.rating ? movie.rating >= filter.rating : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <button onClick={handleAddMovie}>Add Movie</button>
        <Filter filter={filter} setFilter={setFilter} />
        <MovieList movies={filteredMovies} />
      </header>
    </div>
  );
};

export default App;

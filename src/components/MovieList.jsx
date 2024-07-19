// src/components/MovieList.js

import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          imgSrc={movie.imgSrc}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;

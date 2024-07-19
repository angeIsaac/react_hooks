// src/components/MovieCard.js

import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ title, description, imgSrc, rating }) => {
  return (
    <div className="movie-card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;

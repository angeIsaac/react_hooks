// src/components/Filter.js

import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      title: e.target.value,
    }));
  };

  const handleRatingChange = (e) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      rating: e.target.value,
    }));
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={filter.rating}
        onChange={handleRatingChange}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;

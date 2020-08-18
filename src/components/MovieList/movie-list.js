import React from 'react';
import './movie-list.scss';
import MovieCard from '../MovieCard/movie-card';

const MovieList = () => {
  return (
    <div className="movie-list">
      <div className="movie-list__container">
        <h2 className="heading-secondary mb-5">Movie List</h2>
        <MovieCard />
      </div>
    </div>
  )
}

export default MovieList;

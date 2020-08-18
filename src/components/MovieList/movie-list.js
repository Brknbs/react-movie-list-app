import React from 'react';
import './movie-list.scss';
import MovieCard from '../MovieCard/movie-card';

const MovieList = () => {
  return (
    <div className="movie-list">
      <h2 className="heading-secondary">Movie List</h2>
      <MovieCard />
    </div>
  )
}

export default MovieList;

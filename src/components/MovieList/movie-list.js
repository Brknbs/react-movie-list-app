import React from 'react';
import { useSelector } from 'react-redux';
import './movie-list.scss';
import MovieCard from '../MovieCard/movie-card';
import MovieCardDetails from '../MovieCardDetails/movie-card-details';

const MovieList = () => {
  const mapState = ({ movies }) => {
    return {
      searchedMovies: movies.searchedMovies,
      error: movies.error
    };
  };

  const { searchedMovies, error } = useSelector(mapState);

  return (
    <div className="movie-list">
      <div className="movie-list__container">
        <h2 className="heading-secondary mb-5">Movie List</h2>
        {searchedMovies && 
          searchedMovies.map(movie => (
            <MovieCard movie={movie} />
          ))
        }
      </div>
    </div>
  )
}

export default MovieList;

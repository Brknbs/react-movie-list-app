import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './movie-list.scss';
import MovieCard from '../MovieCard/movie-card';
import { searchMoviesByName } from '../../redux/actions/moviesActions';

const MovieList = () => {
  const dispatch = useDispatch();

  const [searchedMovie, setSearchedMovie] = useState('');

  const handleSubmit = async  e => {
    e.preventDefault();
    dispatch(searchMoviesByName(searchedMovie));
    //dispatch(getAllMovies());
  } 

  const handleChange = e => {
    setSearchedMovie(e.target.value);
  }

  const mapState = ({ movies }) => {
    return {
      searchedMovies: movies.searchedMovies,
      error: movies.error
    };
  };

  const { searchedMovies, error } = useSelector(mapState);

  useEffect(() => {
    if (!searchedMovies) {
      setSearchedMovie('pokemon');
      dispatch(searchMoviesByName('pokemon'));
    }
  }, [])

  return (
    <div className="movie-list" id="movie-list">
      <div className="movie-list__container">
        <h2 className="heading-secondary mb-5 mt-3">Search Here</h2>
        <form onSubmit={handleSubmit} className="movie-list__container--form">
          <input type="text" 
            placeholder="Search movies" 
            className="movie-list__container--form-input" 
            onChange={handleChange}
            value={searchedMovie}
          />
          <button className="button-primary ml-4">Search</button>
        </form>
         {error && <p className="paragraph-primary results-placeholder text-danger">{error}</p>}
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

import * as constants from '../constants';
import axios from 'axios';
import _ from 'lodash';

export const searchMoviesByName = title => {
  return dispatch => {
    return fetchMoviesByName(title)
      .then(movies => {
        console.log(movies)

        if (movies.data.Error) {
          throw movies.data.Error;
        } else {
          const sortedMovies = sortByYear(movies.data.Search);
          dispatch(searchMoviesSuccess(sortedMovies));
        }
      })
      .catch(error => dispatch(searchMoviesError(error)));
  };
};

export const searchMovieByID = id => {
  return dispatch => {
    return fetchMovieByID(id)
      .then(movie => {
        //console.log(movie.data.Title)

        if (movie.data.Error) {
          throw movie.data.Error;
        } else {
          dispatch(searchOneMovieSuccess(movie.data));
        }
      })
      .catch(error => dispatch(searchOneMovieError(error)));
  };
};

export const resetDetailedMovie = () => {
  return {
    type: constants.RESET_DETAILED_MOVIE
  }
}

export const toggleLoading = () => {
  return {
    type: constants.TOGGLE_LOADING
  }
}

const fetchMoviesByName = title => {
  return axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
};

const fetchMovieByID = id => {
  return axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
};

const searchMoviesSuccess = movies => {
  return {
    type: constants.SEARCH_MOVIES_SUCCESS,
    payload: movies
  }
}

const searchMoviesError = error => {
  return {
    type: constants.SEARCH_MOVIES_ERROR,
    payload: error
  }
}

const searchOneMovieSuccess = movie => {
  return {
    type: constants.SEARCH_ONE_MOVIE_SUCCESS,
    payload: movie
  }
}

const searchOneMovieError = error => {
  return {
    type: constants.SEARCH_ONE_MOVIE_ERROR,
    payload: error
  }
}

const sortByYear = movies => {
 return  _.orderBy(movies, ['Year'], ['asc']); 
};
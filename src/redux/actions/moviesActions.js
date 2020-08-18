import * as constants from '../constants';
import axios from 'axios';

export const searchMovie = title => {
  return dispatch => {
    return fetchMovie(title)
      .then(movie => {
        console.log(movie.data.Title)

        if (movie.data.Error) {
          throw movie.data.Error;
        } else {
          dispatch(searchMovieSuccess(movie.data));
        }
      })
      .catch(error => dispatch(searchMovieError(error)));
  };
};

const fetchMovie = title => {
  return axios.get(`http://www.omdbapi.com/?t=${title}&apikey=6421e299`);
};

const searchMovieSuccess = movie => {
  return {
    type: constants.SEARCH_MOVIE_SUCCESS,
    payload: movie
  }
}

const searchMovieError = error => {
  return {
    type: constants.SEARCH_MOVIE_ERROR,
    payload: error
  }
}
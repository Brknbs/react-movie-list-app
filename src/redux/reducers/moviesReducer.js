import * as constants from '../constants';

const initialState = {
  searchedMovies: null,
  detailedMovie: null,
  error: '',
};

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SEARCH_MOVIES_SUCCESS:
      return {...state, searchedMovies: action.payload, error: ''};
    case constants.SEARCH_MOVIES_ERROR:
      return {...state, error: action.payload};
    case constants.SEARCH_ONE_MOVIE_SUCCESS:
      return {...state, detailedMovie: action.payload, error: ''};
    case constants.SEARCH_ONE_MOVIE_ERROR:
      return {...state, error: action.payload};
    case constants.RESET_DETAILED_MOVIE:
      return {...state, detailedMovie: null};
    default:
      return state;
  }
}

export default moviesReducer;
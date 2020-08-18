import * as constants from '../constants';

const initialState = {
  searchedMovie: null,
  error: ''
};

const moviesReducer = (state = initialState, action) => {
  switch(action.type) {
    case constants.SEARCH_MOVIE_SUCCESS:
      return {...state, searchedMovie: action.payload, error: ''};
    case constants.SEARCH_MOVIE_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
}

export default moviesReducer;
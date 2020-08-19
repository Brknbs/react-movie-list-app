import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCardDetails from '../../components/MovieCardDetails/movie-card-details';
import './movie-details-page.scss';
import { searchMovieByID, toggleLoading } from '../../redux/actions/moviesActions';
import Spinner from '../../components/Spinner/spinner';

const MovieDetailsPage = ({ match }) => {
  const dispatch = useDispatch();

  const mapState = ({ movies }) => {
    return {
      detailedMovie: movies.detailedMovie,
      error: movies.error,
      loading: movies.loading
    };
  };

  const { detailedMovie, error, loading } = useSelector(mapState);
  const movieID = match.params.id;

  useEffect(() => {
    dispatch(toggleLoading());
    dispatch(searchMovieByID(movieID));
    dispatch(toggleLoading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  return (
    <div className="movie-details-page">
      {loading && <Spinner />}
      {error && <p className="text-danger">{error}</p>}
      {detailedMovie && <MovieCardDetails movieID={match.params.id} detailedMovie={detailedMovie}/>}
    </div>
  )
}

export default MovieDetailsPage;

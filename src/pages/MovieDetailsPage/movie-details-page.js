import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieCardDetails from '../../components/MovieCardDetails/movie-card-details';
import './movie-details-page.scss';
import { searchMovieByID } from '../../redux/actions/moviesActions';

const MovieDetailsPage = ({ match }) => {
  const dispatch = useDispatch();

  const mapState = ({ movies }) => {
    return {
      detailedMovie: movies.detailedMovie,
      error: movies.error
    };
  };

  const { detailedMovie, error } = useSelector(mapState);
  const movieID = match.params.id;

  useEffect(() => {
    dispatch(searchMovieByID(movieID));
  }, []);

  return (
    <div className="movie-details-page">
      {detailedMovie && <MovieCardDetails movieID={match.params.id} detailedMovie={detailedMovie}/>}
    </div>
  )
}

export default MovieDetailsPage;

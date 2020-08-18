import React, { useEffect } from 'react';
import './movie-card.scss';
import { useSelector } from 'react-redux';

const MovieCard = () => {
  const mapState = ({ movies }) => {
    return {
      searchedMovie: movies.searchedMovie,
      error: movies.error
    };
  };

  const { searchedMovie, error } = useSelector(mapState);
  JSON.parse(JSON.stringify(searchedMovie))

  return (
    <div className="movie-card">
      <div className="row no-gutters">
        <div className="col-md-4 movie-card__image px-3">
          <img src={searchedMovie ? searchedMovie.Poster : ''} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title heading-secondary">{searchedMovie ? searchedMovie.Title : null }</h2>
            <p className="card-text paragraph-secondary">{searchedMovie ? searchedMovie.Plot : null}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;

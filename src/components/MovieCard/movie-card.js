import React from 'react';
import './movie-card.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({movie, history}) => {
 
  return (
    
    <div className="movie-card">
      <div className="row no-gutters">
        <div className="col-md-4 movie-card__image px-3">
          <img src={movie.Poster} className="card-img" alt="..." />
        </div>
        <div className="col-md-8 movie-card__text">
          <div className="card-body">
            <h2 className="card-title heading-secondary mb-5">{movie.Title}</h2>
            <p className="card-text paragraph-primary mb-4"><span className="font-weight-bold">Year: </span>{movie.Year}</p>
            <p className="card-text paragraph-primary mb-4"><span className="font-weight-bold">IMDB ID: </span>{movie.imdbID}</p>
            <Link to={`/moviedetails/${movie.imdbID}`}><button className="button-primary mt-3" >See More Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;

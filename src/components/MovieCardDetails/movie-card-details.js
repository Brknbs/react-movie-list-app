import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './movie-card-details.scss';
import { searchMovieByID } from '../../redux/actions/moviesActions';
import { Link } from 'react-router-dom';

const MovieCardDetails = ({ movieID, detailedMovie }) => {

  return (
    <div className="movie-card-details">
      <div className="movie-card-details__container">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-4 movie-card-details__container--image">
            <img src={detailedMovie.Poster} />
          </div>
          <div className="col-12 col-md-6 col-xl-8 movie-card-details__container--text">
            <h2 className="heading-secondary">{detailedMovie.Title}</h2>
            <div className="seperator"></div>
            <p className="paragraph-primary"><span className="font-weight-bold">Genre: </span>{detailedMovie.Genre}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Runtime: </span>{detailedMovie.Runtime}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Released: </span>{detailedMovie.Released}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Plot: </span>{detailedMovie.Plot}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Actors: </span>{detailedMovie.Actors}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Director: </span>{detailedMovie.Director}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Writer: </span>{detailedMovie.Writer}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Language: </span>{detailedMovie.Language}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Country: </span>{detailedMovie.Country}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">IMDB Rating: </span>{detailedMovie.imdbRating}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Metascore: </span>{detailedMovie.Metascore}</p>
            <p className="paragraph-primary"><span className="font-weight-bold">Box Office </span>{detailedMovie.BoxOffice}</p>
            <Link to="/"><button className="button-primary">Back to homepage</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCardDetails;

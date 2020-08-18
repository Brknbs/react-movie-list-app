import React from 'react';
import './movie-card.scss';

const MovieCard = ({}) => {
  return (
    <div className="movie-card">
      <div class="row no-gutters">
        <div className="col-md-4">
          <img src="../../assets/images/movie-image.svg" class="card-img" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Movie Title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;

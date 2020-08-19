import React from 'react';
import './hero.scss';
import MovieImage from '../../assets/images/movie-image2.svg';

const Hero = () => {

  return (
    <div className="hero">
      <div className="hero__container">
        <div className="row">
          <div className="col-12 col-lg-6 hero__container--text">
            <div className="hero__container--text-wrapper">
              <h1 className="heading-primary mb-4">Searching for a movie?</h1>
              <h2 className="paragraph-primary mb-5">Find any movie you want to get information about.</h2>
              <a href="#movie-list"><button className="button-primary ml-4">Start Searching</button></a>
            </div>
          </div>
          <div className="col-12 col-lg-6 hero__container--image">
            <img src={MovieImage} alt="hero-movie-image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;

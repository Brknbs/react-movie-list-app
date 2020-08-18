import React from 'react';
import './homepage.scss';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Hero from '../../components/Hero/hero';
import MovieList from '../../components/MovieList/movie-list';

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <MovieList />
      <Footer />
    </div>
  );
}

export default Homepage;
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './homepage.scss';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Hero from '../../components/Hero/hero';
import MovieList from '../../components/MovieList/movie-list';
import { resetDetailedMovie } from '../../redux/actions/moviesActions';

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetDetailedMovie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
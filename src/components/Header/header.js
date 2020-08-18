import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title container">
        <i className="fas fa-film fa-3x header__title--icon"></i>
        <h2 className="header__title--text">React Movie List App</h2>
      </div>
    </div>
  )
}

export default Header;

import React from 'react'
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col-12 col-md-6 footer__text">
          <p className="paragraph-secondary">Made by Berkan Baş</p>
        </div>
        <div className="col-12 col-md-6 footer__socials">
         <a href="https://www.linkedin.com/in/berkan-ba%C5%9F-bb4961121/"><i className="fab fa-linkedin fa-2x mr-3"></i></a>
         <a href="https://github.com/Brknbs"><i className="fab fa-github-square fa-2x"></i></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

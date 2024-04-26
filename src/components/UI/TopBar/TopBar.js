import React from 'react';
import './TopBar.css'; // Import the CSS file

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='container top-bar-container'>
        <div className='top-bar-content'>
          <div className='icon-container'>
            <i className='fas fa-phone-alt' />
            <small>+212 (0) 666 666 666</small>
          </div>
          <div className='icon-container'>
            <i className='fas fa-envelope' />
            <small>sabib.business@gmail.com</small>
          </div>
        </div>
        <div className='top-bar-content'>
          <div className='social-media-container'>
            <a href='!#' className='text-light social-media-link'>
              <i className='fab fa-facebook-f' />
            </a>
            <a href='!#' className='text-light social-media-link'>
              <i className='fab fa-twitter' />
            </a>
            <a href='!#' className='text-light social-media-link'>
              <i className='fab fa-instagram' />
            </a>
            <a href='!#' className='text-light social-media-link'>
              <i className='fab fa-github' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

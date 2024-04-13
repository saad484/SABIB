import React from 'react';

const topBar = () => {
  return (
    <div className='top-bar pt-1 pb-1 text-light'>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex pt-2 pb-2'>
            <div className='d-flex align-item-center mr-3'>
              <i className='fas fa-phone-alt mr-2' />
              <small>+212 (0) 666 666 666</small>
            </div>
            <div className='d-flex align-item-center'>
              <i className='fas fa-envelope mr-2' />
              <small>sabib@gmail.com</small>
            </div>
          </div>
          <div className='d-flex pt-2 pb-2'>
            <div className='social-media d-flex align-item-center'>
              <a href='!#' className='text-light'>
                <i className='fab fa-facebook-f ' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-twitter ' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-instagram ' />
              </a>
              <a href='!#' className='text-light'>
                <i className='fab fa-github' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default topBar;

import React from 'react';

import Section from '../../../HOC/Section';
import how from '../../../assets/img/how.gif'
const Service = () => {
  return (
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Services
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Business Planning</h5>
                  <p className='service-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-chart-bar' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Product Marketing</h5>
                  <p className='service-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-fist-raised' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Risk Management</h5>
                  <p className='service-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-paper-plane' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Market Research</h5>
                  <p className='service-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-gem' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Business Financing</h5>
                  <p className='service-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-life-ring' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Suppport Team</h5>
                  <p className='service-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-20 text-center bg-white bg-opacity-0">
      <h3 className="custom-color fw-bold mb-5">
        How It Works
        <br />
      </h3>
      <div className="mt-20 text-4xl font-medium text-black max-md:mt-10 max-md:max-w-full mb-4">
        The Sabib Water Monitor and Shutoff is installed on your home’s main
        water supply line to proactively provide leak detection for your whole
        home.
      </div>
      <img
          src={how} alt='how it works'      
        className="w-100"
      />
    </div>
        </div>
        </div>
    </Section>
  );
};

export default Service;

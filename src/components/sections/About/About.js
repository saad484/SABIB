import React from 'react';

import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';
import device from '../../../assets/img/device.png';
import { width } from '@mui/system';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Company
          </h3>
        </div>

        {/* <div className='section-content d-flex'>
            
            <div className='col-md-12 col-lg-6'>

              <h3 className='about-title'>Welcome to sabib <br/>
              Your Digital Water Companion
              </h3>
              <div className='about-description'>
                <p>
                Step into a world where technology meets sustainability. Sabib is here to guide you on a journey of water conservation, real-time monitoring, and effortless control. 
                Begin your seamless experience today and empower yourself with the tools to make a difference
                </p>
                <button className='btn btn-primary rounded-0'>Read More</button>
              </div>
            </div>
            <div className='d-flex justify-content-end'>
            <img src={device} alt='sabib device'  className='aboutImg' style={{ maxWidth: '50%' }}/>
            </div>
          </div> */}
          <div className='section-content'>
  <div className='row align-items-center'>
    <div className='col-md-12 col-lg-6 order-2 order-lg-1'>
      <h3 className='about-title fw-bold'>
        Welcome to Sabib <br/>
        Your Digital Water Companion
      </h3>
      <div className='about-description'>
        <p>
          Step into a world where technology meets sustainability. Sabib is here to guide you on a journey of water conservation, real-time monitoring, and effortless control. 
          Begin your seamless experience today and empower yourself with the tools to make a difference.
        </p>
        <button className='btn btn-primary rounded-0'>Read More</button>
      </div>
    </div>

    <div className='col-md-12 col-lg-6 order-2 order-lg-2 text-center'>
      <img src={device} alt='sabib device' className='img-fluid aboutImg' style={{ maxWidth: '40%' }} />
    </div>
  </div>
</div>

        </div>
    </Section>
  );
};

export default about;

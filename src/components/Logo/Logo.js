import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css'
import brain from './brain.png'

const Logo = () => {
  return (
    <Tilt className='br2 shadow-2 tilt' style={{width: '150px', marginLeft: '30px'}}>
      <div className='pa3' style={{ height: '150px' }}>
        <img style={{paddingTop: '3px' }} alt='logo' src={brain}/>
      </div>
    </Tilt>
  );
};
export default Logo;
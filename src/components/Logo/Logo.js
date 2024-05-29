import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css'

const Logo = () => {
  return (
    <Tilt className='br2 shadow-2 tilt' style={{width: '150px'}}>
      <div style={{ height: '150px' }}>
        <h1>👀</h1>
      </div>
    </Tilt>
  );
};
export default Logo;
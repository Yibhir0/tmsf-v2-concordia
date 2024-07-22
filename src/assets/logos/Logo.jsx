import React from 'react';
import logo from '../img/logo-text.jpg'; // Adjust the path as necessary

const Logo = ({ width = 50, height = 40, alt = "Logo", ...props }) => {
  return (
    <img
      src={logo}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  );
}

export default Logo;
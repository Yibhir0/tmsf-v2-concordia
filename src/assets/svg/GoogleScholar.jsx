

import React from 'react';


const GoogleScholar = ({ width = 39, height = 39, alt = "Logo", ...props }) => {
  return (

    <img width={width} height={height} alt="Google Scholar logo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/512px-Google_Scholar_logo.svg.png?20200110094142">

    </img>
  );
}

export default GoogleScholar;
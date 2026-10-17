import React from 'react';

const GoogleScholar = ({ width = 39, height = 39, ...props }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
      {...props}
    >
      <path
        fill="#4285F4"
        d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.404 12.397 14.823 11.5 12 11.5s-5.404 0.897-6.758 2.269z"
      />
      <path
        fill="#27E7F5"
        d="M12 13c-3.148 0-6 1.344-6 3v2c0 2.21 2.852 4 6 4s6-1.79 6-4v-2c0-1.656-2.852-3-6-3z"
      />

    </svg>
  );
};

export default GoogleScholar;

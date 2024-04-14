import React from 'react';

const ArrowSVG = ({ direction, color }) => {
  const arrowStyles = {
    transform: direction === 'left' ? 'rotate(135deg)' : '',
    fill: color || 'black'
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={arrowStyles}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M17.66 7.93L12.7 2.97a.996.996 0 0 0-1.41 0L6.34 7.93c-.38.38-.38 1.02 0 1.41s1.02.38 1.41 0l3.18-3.18v11.46c0 .55.45 1 1 1s1-.45 1-1V5.16l3.18 3.18c.19.2.44.29.7.29s.51-.1.7-.29c.38-.38.38-1.02 0-1.4z" />
    </svg>
  );
};

export default ArrowSVG;
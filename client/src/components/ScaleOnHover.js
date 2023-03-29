import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ScaleOnHover = ({ children }) => {
  const [hovered, setHovered] = useState(false);

  const animation = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={animation}
    >
      {children}
    </animated.div>
  );
};

export default ScaleOnHover;

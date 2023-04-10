import React, { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';

const LoadingAnimation = () => {
  const [loadingText, setLoadingText] = useState('Loading');

  useEffect(() => {
    const loadingFrames = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
    let frameIndex = 0;

    const interval = setInterval(() => {
      frameIndex = (frameIndex + 1) % loadingFrames.length;
      setLoadingText(loadingFrames[frameIndex]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return <Box w='80px'><Text>{loadingText}</Text></Box>;
};

export default LoadingAnimation;

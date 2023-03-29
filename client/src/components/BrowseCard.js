import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const BrowseCard = ({ id, text }) => {
  return (
    <Box position="relative" w="200px" maxH="150px" borderRadius="15px" overflow="hidden">
      <Image
        src="../static/images/quizard.png"
        alt="Background"
        width="100%"
        height="100%"
        objectFit="cover"
      />
      <Box
        position="absolute"
        bottom={0}
        left={0}
        width="100%"
        height="30%"
        backgroundColor="rgba(0, 0, 0, 0.5)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text color="white" fontSize="xl" fontWeight="bold">
          {text}
        </Text>
      </Box>
    </Box>
  );
};

export default BrowseCard;

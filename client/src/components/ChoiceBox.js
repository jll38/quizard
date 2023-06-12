import React, { useState, useEffect } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel, Button, Divider, Heading, Flex, Spacer, Center, Radio } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function ChoiceBox({ choice, id, onClick, disabled, correctAnswer, isCorrectBox }) {
  const [bgColor, setBgColor] = useState('purple.100');
  const [hvColor, setHvColor] = useState('purple.200');
  const [selectedBgColor, setSelectedBgColor] = useState('');

  useEffect(() => {
    if (disabled) {
      if (isCorrectBox) {
        setBgColor('green.500');
      } else {
        setBgColor(selectedBgColor || 'gray.400');
      }
      setHvColor('');
    } else {
      setBgColor('white');
    }
  }, [disabled, selectedBgColor, isCorrectBox]);

  const handleClick = (id, choice) => {
    if (choice !== correctAnswer) {
      setSelectedBgColor('gray.600');
    }
    onClick(id, choice);
  };

  return (
    <>
      <Box
        minW="80px"
        w="100%"
        border={"solid"}
        borderRadius={"8px"}
        bgColor={bgColor}
        as={"button"}
        p="10px"
        id={id}
        disabled={disabled}
        fontSize={{base: ".75em", md: "1em"}}
        onClick={() => handleClick(id, choice)}
        _hover={{
          bg: { hvColor },
        }}
      >
        {choice}
      </Box>
    </>
  );
}

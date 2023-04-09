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
        setBgColor(selectedBgColor || 'gray.600');
      }
      setHvColor('');
    } else {
      setBgColor('white');
    }
  }, [disabled, selectedBgColor, isCorrectBox]);

  const handleClick = (id, choice) => {
    if (choice !== correctAnswer) {
      setSelectedBgColor('red.500');
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

import React, { useState, useEffect } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel, Button, Divider, Heading, Flex, Spacer, Wrap, WrapItem } from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import ChoiceBox from './ChoiceBox';

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function MultipleChoice({ data, answer, options, qNum }) {
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);

  const setClicked = (id, choiceValue) => {
    console.log(`Clicked ChoiceBox ID: ${id}`);
    console.log(`Clicked ChoiceBox Value: ${choiceValue}`);
    if (choiceValue === answer) {
      console.log('Correct Answer!');
    } else {
      console.log('Incorrect Answer!');
    }
  };
  console.log(`Answer = ${answer}`);
  console.log(`Options = ${options}`);
  const optionsArray = [];
  for (let key in options) {
    optionsArray.push(String(options[key]));
  }

  // Add answer to optionsArray
  optionsArray.push(answer);

  // Shuffle the optionsArray
  shuffleArray(optionsArray);

  // Find the index of the correct answer
  useEffect(() => {
    setCorrectAnswerIndex(optionsArray.indexOf(answer));
  }, [optionsArray, answer]);

  console.log(`Correct Answer Index: ${correctAnswerIndex}`);

  return (
    <>
      <Wrap spacing="50px" align="center">
        {optionsArray.map((option, i) => {
          return (
            <WrapItem key={i}>
              <ChoiceBox choice={option} onClick={(id, choiceValue) => setClicked(id, choiceValue)} id={'q-' + qNum + '-c-' + i} />
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
}

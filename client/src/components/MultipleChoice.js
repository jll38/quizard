import React, { useState, useEffect, useMemo } from 'react';
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
  const [isDisabled, setIsDisabled] = useState(false);

  const setClicked = (id, choiceValue) => {
    console.log('isDisabled: ' + isDisabled);
    console.log(`Clicked ChoiceBox ID: ${id}`);
    console.log(`Clicked ChoiceBox Value: ${choiceValue}`);
    if (choiceValue === answer) {
      console.log('Correct Answer!');
    } else {
      console.log('Incorrect Answer!');
    }
    setIsDisabled(true);
  };

  // Create and shuffle the optionsArray using useMemo
  const optionsArray = useMemo(() => {
    const newArray = [];
    for (let key in options) {
      newArray.push(String(options[key]));
    }
    newArray.push(answer);
    shuffleArray(newArray);
    return newArray;
  }, [options, answer]);

  // Find the index of the correct answer
  useEffect(() => {
    setCorrectAnswerIndex(optionsArray.indexOf(answer));
  }, [optionsArray, answer]);

  const [correctBoxId, setCorrectBoxId] = useState('');

  useEffect(() => {
    setCorrectBoxId('q-' + qNum + '-c-' + optionsArray.indexOf(answer));
  }, [optionsArray, answer, qNum]);

  return (
    <>
      <Wrap spacing="50px" align="center">
        {optionsArray.map((option, i) => {
          const boxId = 'q-' + qNum + '-c-' + i;
          return (
            <WrapItem key={i}>
              <ChoiceBox
                choice={option}
                onClick={(id, choiceValue) => setClicked(id, choiceValue)}
                id={boxId}
                disabled={isDisabled}
                correctAnswer={answer}
                isCorrectBox={boxId === correctBoxId}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </>
  );
}
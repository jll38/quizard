import React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button, Divider, Heading } from '@chakra-ui/react';
import MultipleChoice from './MultipleChoice';
import { Form } from 'react-router-dom';

export default function RenderQuiz({data})
{   
    const questions = JSON.parse(data[3]);
    const answers = JSON.parse(data[4]);
    const options = JSON.parse(data[5]);
    console.log(questions);
    console.log(answers);
    return(
        <>
        <Box maxW='500px'>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} borderBottom={'2px'} borderColor='purple.400'>
            <Text>{data[1]}</Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>By: {data[2]}</Text>
            </Heading>
            {questions.map((question, i) => {
                return(<FormControl name={'q-'+i}>
                    <Text fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} fontWeight={'500'}>{question}</Text>
                    <MultipleChoice answer={answers[i]} options={options[i]}/>
                </FormControl>);
            })}
        </Box>
        </>
    );
}

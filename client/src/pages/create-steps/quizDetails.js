import 'antd/dist/reset.css';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import AddQuestionDetails from '../../components/AddQuestionDetails';

import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    VStack,
    Text,
    useBreakpointValue,
    Box,
    Divider,
    Input,
    FormControl,
    FormLabel
} from '@chakra-ui/react'
import { Form } from 'react-router-dom';


function QuizDetails() {
    const [numQ, setNumQ] = useState(1);
    useEffect(() => {
        if (sessionStorage.getItem("quizName") === null) {
            window.location.assign('/create');
        }
    }, []);

    const addNewQuestion = () => {
        setNumQ(numQ+ 1);
      };

    const renderQuestions = () => {
        const questions = [];
        for (let i = 0; i < numQ; i++) {
          questions.push(<AddQuestionDetails key={i} num={i} />);
        }
        return questions;
      };
    
      const publish = () => {
        
      };
    return (
        <>
            <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} borderBottom={'2px'} borderColor='purple.400'>
                            <Text
                                as={'span'}
                                position={'relative'}>
                                Create a <Text as={'span'} color={'purple.400'}>Quiz</Text>
                            </Text>
                            <br />{' '}
                        </Heading>
                        {renderQuestions()}
                        <Button variant='outline' colorScheme='purple' w='10%' onClick={addNewQuestion}>+</Button>
                        <Button colorScheme='purple'>Next</Button>
                    </Stack>
                </Flex>
            </Stack>

            <Box minH='10vh'>
            </Box>
            <Divider orientation='horizontal' w='100%' />
            <Box minH='10vh'>
            </Box>


        </>
    );
}

export default QuizDetails
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
    FormLabel,
    HStack
} from '@chakra-ui/react'
import { Form } from 'react-router-dom';


function QuizDetails() {
    const [numQ, setNumQ] = useState(1);
    useEffect(() => {
        if (sessionStorage.getItem("quizName") == null || sessionStorage.getItem("author") == null) {
            window.location.assign('/create');
        }
    }, []);
    
    
    const addNewQuestion = () => {
        setNumQ(numQ+ 1);
      };
    
    const removeQuestion = () => {
        setNumQ(numQ-1);
    };

    const renderQuestions = () => {
        const questions = [];
        for (let i = 0; i < numQ; i++) {
          questions.push(<AddQuestionDetails key={i} num={i} />);
        }
        return questions;
      };
    
      const publish = () => {
        /*TODO: Add Questions & to Session Storage*/
        window.location.assign('/create/publish');
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
                        <HStack>
                            <Button variant='outline' colorScheme='purple' w='10%' onClick={addNewQuestion}>+</Button>
                            <Button variant='outline' colorScheme='purple' w='10%' onClick={removeQuestion}>-</Button>
                        </HStack>
                        <Button colorScheme='purple' onClick={publish}>Next</Button>
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
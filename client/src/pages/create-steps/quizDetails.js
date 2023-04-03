import 'antd/dist/reset.css';
import React, { useState, useEffect, useRef } from 'react';
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
    HStack,
    FormHelperText
} from '@chakra-ui/react'
import { Form } from 'react-router-dom';


function QuizDetails() {
    const [numQ, setNumQ] = useState(1);
    const [errors, setErrors] = useState([])
    
    const getQuizDetails = () => {
        const questions = [];
        const answers = [];
        const options = [];
        for(let i = 0; i < numQ; i++) {
            questions.push(document.getElementById(`${i}-q-1`).value);
        }
        /*Todo: Populate answers and options*/
        console.log(questions);
        sessionStorage.setItem('questions', questions);
        sessionStorage.setItem('answers', answers);
        sessionStorage.setItem('options', options);
    }
    //Redirects user to the Create Page if they have not begun creating the quiz yet (missing quizName and author values)
    useEffect(() => {
        if (sessionStorage.getItem("quizName") == null || sessionStorage.getItem("author") == null) {
            window.location.assign('/create');
        }
    }, []);
    
    //Adds question field to the array of questions, which gets rendered to the page
    const addNewQuestion = () => {
        setNumQ(numQ+ 1);
      };
    
    //Removes question field from the array of questions, which gets rendered to the page
    const removeQuestion = () => {
        setNumQ(numQ-1);
    };

    //Renders array of questions to the page
    const renderQuestions = () => {
        const questions = [];
        for (let i = 0; i < numQ; i++) {
          questions.push(<AddQuestionDetails key={i} num={i} />);
        }
        return questions;
      };
    
    //Saves questions and options to session storage, and redirects user to the publish page
    const publish = () => {
        getQuizDetails();
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
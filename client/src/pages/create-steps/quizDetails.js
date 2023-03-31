import 'antd/dist/reset.css';
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

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
    useEffect(() => {
        if (sessionStorage.getItem("quizName") === null) {
            console.log("bruh");
            window.location.assign('/create');
        }
    }, []);
    return (
        <>
            <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={12} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} borderBottom={'2px'} borderColor='purple.400'>
                            <Text
                                as={'span'}
                                position={'relative'}>
                                Create a <Text as={'span'} color={'purple.400'}>Quiz</Text>
                            </Text>
                            <br />{' '}
                        </Heading>
                        <FormControl>
                            <FormLabel for='q-1'>Question 1</FormLabel>
                            <Input id='q-1'></Input>
                            <Button variant='outline' colorScheme='purple'>+</Button>
                        </FormControl>
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
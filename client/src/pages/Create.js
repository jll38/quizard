import 'antd/dist/reset.css';
import '../App.css';
import React, { useState, useEffect } from 'react';

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


function CreatePage() {
    function handleCreateQuiz(event) {
        console.log('handleCreateQuiz called')
        const quizName = document.getElementById('q-1').value;
        const author = document.getElementById('q-2').value;
        const thumbnail = document.getElementById('q-3').files[0];

        console.log(`Quiz Information: Quiz Name: ${quizName}, author ${author}, thumbnail: ${thumbnail}`);
        window.sessionStorage.setItem('quizName', quizName);
        window.sessionStorage.setItem('author', author);
        window.sessionStorage.setItem('thumbnail', thumbnail);
        window.location.assign('/create/details');
    }
    return (
        <>
            <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={12} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} borderBottom={'2px'} borderColor='purple.400'>
                            <Text
                                as={'span'}
                                position={'relative'}>
                                Create a <Text as={'span'} color={'purple.400'}> Quiz</Text>
                            </Text>
                            <br />{' '}
                        </Heading>
                        <FormControl>
                            <FormLabel for='q-1'>Quiz Name</FormLabel>
                            <Input placeholder='HTML Quiz' id='q-1' autoComplete='off'></Input>
                            <FormLabel for='q-2'>Author</FormLabel>
                            <Input placeholder='John Doe' id='q-2' autoComplete='off'></Input>
                            <FormLabel for='q-3'>Thumbnail</FormLabel>
                            <Input border='none' type='file' id='q-3'></Input>
                            <Button colorScheme='purple' onClick={handleCreateQuiz}>Next</Button>
                        </FormControl>
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

export default CreatePage 
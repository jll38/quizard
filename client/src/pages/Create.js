import 'antd/dist/reset.css';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
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
    FormHelperText
} from '@chakra-ui/react'
import { Form } from 'react-router-dom';


function CreatePage() {
    const [validateError, setValidateError] = useState([])
    useEffect(() => {
        sessionStorage.clear();
    }, []);

    function validateName(name) {
        console.log('validateName: ', name);
        var regex = /^[a-zA-Z ]{2,30}$/;
        if (!name) {
          setValidateError(prevArray => [...prevArray, 'Please enter a quiz name.']);
          return false;
        } else if (!regex.test(name)) {
          setValidateError(prevArray => [...prevArray, 'Please enter a valid quiz name.']);
          return false;
        }
        console.log('Name Validated');
        return true;
      }
      function validateAuthor(name) {
        console.log('validateAuthor: ', name);
        var regex = /^[a-zA-Z ]{2,30}$/;
        if (!name) {
          setValidateError(prevArray => [...prevArray, 'Please enter an author name.']);
          return false;
        } else if (!regex.test(name)) {
          setValidateError(prevArray => [...prevArray, 'Please enter a valid author name.']);
          return false;
        }
        console.log('Author Validated');
        return true;
      }

    function handleCreateQuiz(event) {
        console.log('handleCreateQuiz called')
        setValidateError([])
        const quizName = document.getElementById('q-1').value;
        const author = document.getElementById('q-2').value;
        const thumbnail = document.getElementById('q-3').files[0];

        console.log(`Quiz Information: Quiz Name: ${quizName}, author ${author}, thumbnail: ${thumbnail}`);
        
        const validName = validateName(quizName)
        const validAuthor = validateAuthor(author)
        if( validName && validAuthor)
        {
            window.sessionStorage.setItem('quizName', quizName);
            window.sessionStorage.setItem('author', author);
            window.sessionStorage.setItem('thumbnail', thumbnail);
            window.location.assign('/create/details');
        }
        else{
            console.log(validateError)
        }
        
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
                        <FormControl isRequired>
                            <FormLabel htmlFor='q-1'>Quiz Name</FormLabel>
                            <Input placeholder='HTML Quiz' id='q-1' autoComplete='off'></Input>
                            <FormLabel htmlFor='q-2'>Author</FormLabel>
                            <Input placeholder='John Doe' id='q-2' autoComplete='off'></Input>
                        </FormControl>
                        <FormControl>
                        <FormLabel for='q-3'>Thumbnail</FormLabel>
                            <Input border='none' type='file' id='q-3'></Input>
                            <Button colorScheme='purple' onClick={handleCreateQuiz}>Next</Button>
                            {(validateError.map((error, index) => <FormHelperText color={'red.600'} key={index}>* {error}</FormHelperText>))}
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
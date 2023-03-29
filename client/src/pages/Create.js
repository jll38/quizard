import 'antd/dist/reset.css';
import '../App.css';
import React, { useState, useEffect } from 'react';
import HeaderDiv from '../components/HeaderDiv';
import Feature from '../components/Feature';
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


function CreatePage() {

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
                            <Input placeholder='HTML Quiz' id='q-1'></Input>
                            <FormLabel for='q-2'>Author</FormLabel>
                            <Input placeholder='John Doe' id='q-2'></Input>
                            <FormLabel for='q-3'>Thumbnail</FormLabel>
                            <Input border='none' type='file' id='q-3'></Input>
                            <Button variant='outline' colorScheme='purple'>Next</Button>
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
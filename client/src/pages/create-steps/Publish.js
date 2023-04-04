import 'antd/dist/reset.css';
import '../../App.css';
import React, { useState, useEffect } from 'react';
import ScaleOnHover from '../../components/ScaleOnHover';
import { useSpring, animated } from 'react-spring';

import {  Button,
  Flex,
  Heading,
  Image,
  Stack,
  VStack,
  Text,
  useBreakpointValue, 
  Box,
  Divider} from '@chakra-ui/react'
import BrowseCard from '../../components/BrowseCard';

function Publish() { 

  //Sends quiz information to server, which will handle the database changes.
  const handlePublish = () => {
    console.log('handlePublish() called');
    const quizInfo = {
      'title': sessionStorage.getItem('quizName'),
      'author': sessionStorage.getItem('author'),
      'thumbnail': sessionStorage.getItem('thumbnail') === undefined ? 'default' : sessionStorage.getItem('thumbnail'),
      'questions': sessionStorage.getItem('questions'),
      'answers' : sessionStorage.getItem('answers'),
      'options' : sessionStorage.getItem('options')
    }
    fetch('/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quizInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error('Error while sending quizInfo:', error);
      });
  
    /*Fetch Request to server POST*/
    sessionStorage.clear();
    window.location.assign(`/quizzes`)
  }
  return (
    <>
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={4} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} pr='10' borderRight="2px">
            <ScaleOnHover>
            <Text
              as={'button'}
              position={'relative'}
              _hover={{
                color: 'purple.500',
                transition: 'color 0.3s ease-in-out'
              }}
              transition="color 0.3s ease-in-out"
              border={'2px'}
              padding={'10px'}
              borderColor={'purple.600'}
              borderRadius={'10px'}
              onClick={handlePublish}>
              Publish
            </Text>
            <br />{' '}
            </ScaleOnHover>
          </Heading>
        </Stack>
      </Flex>
      <Flex flex={5} align={'center'} justify={'center'}>
        <Heading>
            <BrowseCard text={sessionStorage.getItem("quizName")} type={''}></BrowseCard>
        </Heading>
      </Flex>
    </Stack>

    </>
  );
}

export default Publish
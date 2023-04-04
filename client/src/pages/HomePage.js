import 'antd/dist/reset.css';
import '../App.css';
import React, { useState, useEffect } from 'react';
import HeaderDiv from '../components/HeaderDiv';
import Feature from '../components/Feature';
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


function HomePage() { 
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  })

  return (
    <>
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'purple.400',
                zIndex: -1,
              }}>
              Quizard
            </Text>
            <br />{' '}
            <Text color={'purple.400'} as={'span'}>
            Create, Share, and Challenge 
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          The Interactive Quiz Hub for Friends and Fun
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'purple.400'}
              color={'white'}
              _hover={{
                bg: 'purple.500',
              }}
              onClick={() =>{
                window.location.assign(`/create`)
              }}>
              Create a Quiz
            </Button>
            <Button 
            as={'a'}
            rounded={'full'}
            href={'/quizzes'}
            >Browse Quizzes</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'quizard logo'}
          objectFit={'cover'}
          src=
            'static\images\quizard-2.png'
          borderRadius='20px'
          boxShadow='2px 4px 10px -2px rgba(0, 0, 0)'
        />
      </Flex>
    </Stack>
    <Box minH='10vh'>
    </Box>
    <Divider orientation='horizontal' w='100%'/>
    <Box minH='10vh'>
    </Box>
    <VStack minH={'50vh'} spacing={{ base: 4, md: 6 }}>
  <Heading fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>Hottest Quizzes</Heading>
  <Stack spacing={8} direction={{ base: 'column', md: 'row' }}>
    <Feature title='HTML Quiz'></Feature>
    <Feature title='IS247 Quiz'></Feature>
    <Feature title='HTML Quiz'></Feature>
    <Feature title='IS247 Quiz'></Feature>
  </Stack>
</VStack>

    </>
  );
}

export default HomePage 
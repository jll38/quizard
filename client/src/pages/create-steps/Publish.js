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
              transition="color 0.3s ease-in-out">
              Publish
            </Text>
            <br />{' '}
            </ScaleOnHover>

          </Heading>
        </Stack>
      </Flex>
      <Flex flex={5} align={'center'} justify={'center'}>
        <Heading>
            <BrowseCard text={sessionStorage.getItem("quizName")}></BrowseCard>
        </Heading>
      </Flex>
    </Stack>

    </>
  );
}

export default Publish /*Allows HomePage to be imported into App.js*/
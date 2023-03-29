import 'antd/dist/reset.css';
import '../App.css';
import React, { useState, useEffect } from 'react';
import Feature from '../components/Feature';

import {  Button,
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
  HStack,
  Grid,} from '@chakra-ui/react'


function Browse() { 

    /*Contents of Homepage*/
  return (
    <>
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={10} flex={1} align={'center'} justify={'center'}>
        Text
      </Flex>
      <Flex flex={4} borderRight='1px' overflowY='scroll'>
      <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={4}
    >
        <Feature title='Test' />
        <Feature title='Test' />
        <Feature title='Test' />
        <Feature title='Test' />
        <Feature title='Test' />
        <Feature title='Test' />
        <Feature title='Test' />
        <Feature title='Test' />
        
    </Grid>
      </Flex>
    </Stack>

    </>
  );
}

export default Browse
import 'antd/dist/reset.css';
import '../App.css';
import React, { useState, useEffect } from 'react';
import BrowseCard from '../components/BrowseCard';
import ScaleOnHover from '../components/ScaleOnHover';

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
  Grid,
  Container,} from '@chakra-ui/react'



function Browse() { 
    const [qData, setQData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    /*useEffect fetching json message from the backend*/
    useEffect(() => {       
      fetch("/getQuizzes").then(
        res => res.json()
      ).then(
        data => {
          setIsLoading(false);
          console.log(data)
          data = JSON.parse(data['quizzes'])
          setQData(data)
        }
      )
    }, [])
  /*Fetch request to server for quiz info from database*/
  return (
    <>
    <Stack minH='85vh' direction={{ base: 'column', md: 'row' }} maxH='700px'>
      <Flex p={10} flex={1} align={'center'} justify={'center'}>
        <Container top={0} left={0} position='relative'>
          <Text color={'gray.600'}>Filters</Text>
        </Container>
      </Flex>
      <Flex flex={13} borderLeft='1px' overflowY='scroll' p={'40px'}>
      <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={4}
    >
      {isLoading ? (<Text>Loading...</Text>) : (qData.map((quiz, index) => (
            <ScaleOnHover key={index}>
              <BrowseCard text={quiz.title} id={quiz.id}/>
            </ScaleOnHover>
          )))}
    </Grid>
      </Flex>
    </Stack>
    </>
  );
}

export default Browse
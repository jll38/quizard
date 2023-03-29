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
  Grid,} from '@chakra-ui/react'



function Browse() { 

    /*Contents of Homepage*/
  return (
    <>
    <Stack direction={{ base: 'column', md: 'row' }} maxH='700px'>
      <Flex p={10} flex={1} align={'center'} justify={'center'}>
        Text
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
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>
       <ScaleOnHover>
        <BrowseCard text='HTML Quiz'/>
       </ScaleOnHover>

       

        
    </Grid>
      </Flex>
    </Stack>

    </>
  );
}

export default Browse
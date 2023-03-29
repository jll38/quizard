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
    Divider
} from '@chakra-ui/react'


function AboutPage() {
    /*Contents of Homepage*/
    return (
        <>
            <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={12} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} borderBottom={'2px'} borderColor='purple.400'>
                            <Text
                                as={'span'}
                                position={'relative'}>
                                WHO <Text as={'span'} color={'purple.400'}> WE ARE</Text>
                            </Text>
                            <br />{' '}
                        </Heading>
                    </Stack>
                </Flex>
            </Stack>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ipsum ex,
                rhoncus in sagittis sed, egestas sed arcu. Sed at dapibus quam,
                non viverra dui. Nunc laoreet interdum felis, sed finibus ex
                semper in. Morbi orci orci, ultrices id libero eu, consequat
                volutpat lacus. Sed pretium nisl vel mollis congue.
                Nam nisl metus, luctus dictum odio a, tempor malesuada ante.
                Praesent lobortis convallis elit, ac scelerisque lorem feugiat sit amet.
                Maecenas accumsan malesuada blandit. Nam et magna sed ipsum lacinia 
                convallis vel ac lorem. Morbi dignissim erat commodo mi malesuada, 
                id tincidunt sapien tempor. Suspendisse augue orci, elementum et euismod eget, 
                tincidunt a arcu. Praesent pharetra interdum elit nec lobortis. Cras blandit
                 ornare dolor, et pulvinar neque placerat vel. Praesent bibendum 
                 scelerisque odio eget aliquet. Nulla et velit urna.
            </Text>
            <br/>
            <Text>
            In sit amet lectus nec libero interdum ornare a cursus ligula. 
            Suspendisse interdum mollis orci eget laoreet. Suspendisse potenti. 
            Nunc ultrices tellus vitae massa tincidunt accumsan. 
            Vestibulum odio nisi, lobortis quis congue quis, 
            vulputate sit amet ante. Nunc eleifend, metus eget commodo 
            consequat, nulla est suscipit erat, in aliquet est ante nec ex. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas ac auctor erat.
            </Text>

            <Box minH='10vh'>
            </Box>
            <Divider orientation='horizontal' w='100%' />
            <Box minH='10vh'>
            </Box>


        </>
    );
}

export default AboutPage 
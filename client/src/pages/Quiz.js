import 'antd/dist/reset.css';
import '../App.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import RenderQuiz from '../components/RenderQuiz';

function Quiz() {
    const {id} = useParams();
    const [data, setData] = useState();
    useEffect(() => {       
        fetch(`/getQuiz?quizId=${id.toLocaleLowerCase()}`)
  .then(response => response.json())
  .then(data => {
    setData(data.quizData);
    console.log(data.quizData);
  })
  .catch(error => console.error(error));
      }, [])
    return (
        <>
            <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
                <Flex p={8} flex={12} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} borderBottom={'2px'} borderColor='purple.400'>
                            <Text
                                as={'span'}
                                position={'relative'}>
                                Take a <Text as={'span'} color={'purple.400'}> Quiz</Text>
                            </Text>
                            <br />{' '}
                            <RenderQuiz id={id.toLowerCase()}></RenderQuiz>
                        </Heading>
                    </Stack>
                </Flex>
            </Stack>


        </>
    );
}

export default Quiz 
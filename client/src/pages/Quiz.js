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
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {       
        fetch(`/getQuiz?quizId=${id.toLocaleLowerCase()}`)
  .then(response => response.json())
  .then(data => {
    setData(data.quizData);
    console.log(data.quizData);
    setLoading(false);
  })
  .catch(error => console.error(error));
      }, [])
    return (
        <>
            <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }} w='100%'>
                <Flex p={8} flex={10} align={'center'} justify={'center'}>
                    <Stack spacing={6} w={'full'} maxW={'lg'}>
                            {isLoading ? (<Text>Loading...</Text>) : (<RenderQuiz data={data}></RenderQuiz>)}
                    </Stack>
                </Flex>
            </Stack>


        </>
    );
}

export default Quiz 
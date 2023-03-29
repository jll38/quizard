import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
    Button,
    Image,
    Heading,
    Center,
    HStack
    
  } from '@chakra-ui/react';
export default function Feature({title, description, id}) {
    return(
        <>
        <Box 
        maxW='300px' 
        borderWidth='1px' 
        borderRadius='lg' 
        overflow='hidden'>
            <Image src='../static/images/quizard.png' borderBottom="2px solid" borderColor="gray.400"></Image>
            <Box w='100%' padding='15px'>
                <Stack direction='column'>
                    <Heading fontSize={{ base: 'large', md: 'xl', lg: '3xl' }}>{title}</Heading>
                     <Text color={'gray.600'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel felis diam. Donec eu nisl mattis nisl feugiat venenatis. </Text>
                </Stack> 
            </Box>
            <Box w='100%' padding='15px'>
                <HStack justify='space-between'>
                    <Text color='gray.500'>John Doe</Text>
                    <Button color='white' background='purple.500' _hover={{bg: 'purple.600'}}>Start</Button>
                </HStack>
            </Box>
        </Box>
        </>
    );
}
import React from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button, Divider, Heading, Flex, Spacer, Center, Radio} from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function ChoiceBox({choice, id, onClick})
{   
    return(
        <>
            <Box
                minW='80px'
                w='100%'
                border={'solid'}
                borderRadius={'8px'}
                bgColor={'purple.100'}
                as={'button'}
                p='10px'
                id={id}
                onClick={() => onClick(id, choice)}
                _hover={{
                    bg: 'purple.200',
                }}
            >
                {choice}
            </Box>
        </>
    );
}

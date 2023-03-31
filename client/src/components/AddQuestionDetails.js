import React from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function AddQuestionDetails({num})
{
    return(
        <FormControl>
            <FormLabel for='q-1' _disabled={true}>Question {num + 1}</FormLabel>
            <Input id='q-1'></Input>
        </FormControl>
    );
}
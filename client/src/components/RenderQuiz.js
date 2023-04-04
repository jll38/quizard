import React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button, Divider } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function RenderQuiz({id})
{   
    
    
    return(
        <>
            <Text>The ID passed from the URL is {id}</Text>
        </>
    );
}

import React from 'react';
import { useState } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button, Divider } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function AddQuestionDetails({num})
{   
    const [nOptions, setNumOptions] = useState(0);

    const addOptions = () => {
        if(nOptions < 2)
        {
            setNumOptions(nOptions + 1);
        } else{

        }
    }
    const RenderOptions = () => {
        const options = [];
        for (let i = 0; i < nOptions; i++) {
          options.push(<Input key={i} id={num+'-o-'+(i+2)}></Input>);
        }
        return options;
    }
    return(
        <FormControl>
            <FormLabel>Question {num + 1}</FormLabel>
            <Input id={num + '-q-1'}></Input>
            <FormLabel>Answer</FormLabel>
            <Input id='answer'></Input>
            <FormLabel>Other Option(s)</FormLabel>
            <Input id={num+'-o-1'}></Input>
            {RenderOptions()}
            <Button onClick={() => {
                addOptions();
            }}>Add Option</Button>
            <Divider mt='20px' orientation='horizontal'></Divider>
        </FormControl>
    );
}

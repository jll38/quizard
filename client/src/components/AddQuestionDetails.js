import React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button, Divider } from '@chakra-ui/react';
import { Form } from 'react-router-dom';

export default function AddQuestionDetails({num}, { onSendData })
{   
    const [nOptions, setNumOptions] = useState(0);
    
    const getNumOptions = () => {
        return(nOptions + 1);
    }

    const addOptions = () => {
        if(nOptions < 2)
        {
            setNumOptions(nOptions + 1);
        } else{

        }
    }
    const subOptions = () => {
        if(nOptions > 0)
        {
            setNumOptions(nOptions - 1);
        } else{

        }
    }
    const RenderOptions = () => {
        const options = [];
        for (let i = 0; i < nOptions; i++) {
          options.push(<Input key={i} id={num+'-o-'+(i+2)} autoComplete='off'></Input>);
        }
        return options;
    }
    return(
        <FormControl>
            <FormLabel>Question {num + 1}</FormLabel>
            <Input id={num + '-q-1'} autoComplete='off'></Input>
            <FormLabel>Answer</FormLabel>
            <Input id={num + '-a'} autoComplete='off'></Input>
            <FormLabel>Other Option(s)</FormLabel>
            <Input id={num+'-o-1'} autoComplete='off'></Input>
            {RenderOptions()}
            <Button variant={'outline'} onClick={() => {
                addOptions();
            }}>Add Option</Button>
            <Button variant={'outline'} float={'right'} onClick={() => {
                subOptions();
            }}>Remove Option</Button>
            <Divider mt='25px' orientation='horizontal'></Divider>
        </FormControl>
    );
}

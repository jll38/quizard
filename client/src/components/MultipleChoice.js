import React from 'react';
import { useState, forwardRef, useImperativeHandle } from 'react';
import { Box, Text, Image, FormControl, Input, FormLabel,Button, Divider, Heading, Flex, Spacer, Wrap, WrapItem} from '@chakra-ui/react';
import { Form } from 'react-router-dom';
import ChoiceBox from './ChoiceBox';

export default function MultipleChoice({data, answer, options})
{   
    console.log(`Answer = ${answer}`)
    console.log(`Options = ${options}`)
    const optionsArray = [];
    for (let key in options) {
        optionsArray.push(String(options[key]));
    }
    return(
        <>
            <Wrap spacing ='50px' align='center'>
                <WrapItem>
                    <ChoiceBox choice={answer}/>
                </WrapItem>
                {optionsArray.map((option, i) => {
                    return (<WrapItem>
                        <ChoiceBox choice={option}/>
                    </WrapItem>)
                })}
            </Wrap>
        </>
    );
}

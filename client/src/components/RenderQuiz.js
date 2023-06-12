import React from "react";
import { useState, forwardRef, useImperativeHandle } from "react";
import {
  Box,
  Text,
  Image,
  FormControl,
  Input,
  FormLabel,
  Button,
  Divider,
  Heading,
  Flex,
  Center
} from "@chakra-ui/react";
import MultipleChoice from "./MultipleChoice";
import { Form } from "react-router-dom";

export default function RenderQuiz({ data }) {
  const questions = JSON.parse(data[3]);
  const answers = JSON.parse(data[4]);
  const options = JSON.parse(data[5]);
  console.log(questions);
  console.log(answers);
  return (
    <>
      <Box maxW="100%">
        <Heading
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          borderBottom={"2px"}
          borderColor="purple.400"
        >
          <Text>{data[1]}</Text>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            By: {data[2]}
          </Text>
        </Heading>
        <Flex direction={"column"} alignItems={"center"}>
          {questions.map((question, i) => {
            return (
              <FormControl
                name={"q-" + i}
                my="5"
                className="quiz-box"
                width={{ base: "350px", sm: "500px", md: "900px" }}
              >
                <Text
                  fontSize={{ base: "sm", md: "lg", lg: "lg" }}
                  fontWeight={"500"}
                  my={"2"}
                >
                  {question}
                </Text>
                <div className="question-divider"></div>
                <MultipleChoice
                  answer={answers[i]}
                  options={options[i]}
                  qNum={i + 1}
                />
              </FormControl>
            );
          })}
        </Flex>
      </Box>
    </>
  );
}

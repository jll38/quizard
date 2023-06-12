import "../App.css";
import React, { useState, useEffect } from "react";
import BrowseCard from "../components/BrowseCard";
import ScaleOnHover from "../components/ScaleOnHover";
import LoadingAnimation from "../components/LoadingText";


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
  HStack,
  Grid,
  Container,
} from "@chakra-ui/react";

function Browse() {
  const [qData, setQData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  /*useEffect fetching json message from the backend*/
  useEffect(() => {
    fetch("/getQuizzes")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        console.log(data);
        data = JSON.parse(data["quizzes"]);
        setQData(data);
      });
  }, []);
  /*Fetch request to server for quiz info from database*/
  return (
    <>
      <Box
        position={"absolute"}
        h={300}
        width={325}
        opacity=".40"
        top={"40%"}
        right={0}
        zIndex={-1}
      >
        <img src="/static/images/quadratic.png" id="quadratic-img"></img>
      </Box>
      <Box
        position={"absolute"}
        h={300}
        width={325}
        opacity=".30"
        top={"60%"}
        left={0}
        zIndex={-1}
      >
        <img src="/static/images/grad-cap.png" id="cap-img"></img>
      </Box>
      <Stack minH="50vh" direction={{ base: "column", md: "row" }} maxH="700px">
        <Flex flex={13} overflowY="scroll" p={"40px"} maxH={"77vh"}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              qData.map((quiz, index) => (
                <ScaleOnHover key={index}>
                  <BrowseCard text={quiz.title} id={quiz.id} />
                </ScaleOnHover>
              ))
            )}
          </Grid>
        </Flex>
      </Stack>
    </>
  );
}

export default Browse;

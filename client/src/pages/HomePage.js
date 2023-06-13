import "../App.css";
import React, { useState, useEffect } from "react";
import LoadingAnimation from "../components/LoadingText";
import ScaleOnHover from "../components/ScaleOnHover";
import BrowseCard from "../components/BrowseCard";
import HeaderDiv from "../components/HeaderDiv";
import Feature from "../components/Feature";
import { useSpring, animated } from "react-spring";

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
  Center,
} from "@chakra-ui/react";

function HomePage() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("UseEffect Called");
    fetch("https://quizard-backend-final.herokuapp.com/api/homepage")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
        console.log(data);
      });
  }, []);

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
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                textColor={"gray.700"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "purple.400",
                  zIndex: -1,
                }}
              >
                Quizard
              </Text>
              <br />{" "}
              <Text color={"purple.400"} as={"span"}>
                Create, Share, and Challenge
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              The Interactive Quiz Hub for Friends and Fun
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"purple.400"}
                color={"white"}
                _hover={{
                  bg: "purple.500",
                }}
                onClick={() => {
                  window.location.assign(`/create`);
                }}
              >
                Create a Quiz
              </Button>
              <Button as={"a"} rounded={"full"} href={"/quizzes"}>
                Browse Quizzes
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Center>
            <Image
              alt={"quizard logo"}
              objectFit={"cover"}
              src="static\images\quizard-2.png"
              borderRadius="20px"
              boxShadow="2px 4px 10px -2px rgba(0, 0, 0)"
              h={"350px"}
            />
          </Center>
        </Flex>
      </Stack>
      <Box minH="10vh"></Box>
      <Divider orientation="horizontal" w="100%" />
      <Box minH="10vh"></Box>
      <VStack minH={"50vh"} spacing={{ base: 4, md: 6 }}>
        <Heading fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}>
          Hottest Quizzes
        </Heading>
        <Stack spacing={8} direction={{ base: "column", md: "row" }}>
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            data.map((quiz, index) => (
              <ScaleOnHover key={index}>
                <BrowseCard text={quiz[1]} id={quiz[0]} />
                <Text>{quiz[2]} views</Text>
              </ScaleOnHover>
            ))
          )}
        </Stack>
      </VStack>
    </>
  );
}

export default HomePage;

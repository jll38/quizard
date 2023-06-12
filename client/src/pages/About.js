import "../App.css";
import React, { useState, useEffect } from "react";
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
  position,
} from "@chakra-ui/react";

function AboutPage() {
  /*Contents of Homepage*/
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
      <Stack minH={"40vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={12} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              borderBottom={"2px"}
              borderColor="purple.400"
            >
              <Text as={"span"} position={"relative"}>
                WHO{" "}
                <Text as={"span"} color={"purple.400"}>
                  {" "}
                  WE ARE
                </Text>
              </Text>
              <br />{" "}
            </Heading>
          </Stack>
        </Flex>
      </Stack>
      <Box>
        <Text>
          Welcome to Quizard, the ultimate destination for quiz enthusiasts and
          creators alike! Our mission is to make learning and challenging
          knowledge a fun, interactive, and engaging experience for users of all
          ages and backgrounds.{" "}
        </Text>
        <Text>
          At Quizard, we are passionate about empowering our users to create
          custom quizzes tailored to their interests and needs. With multiple
          question types and varying difficulty levels, our platform enables you
          to craft quizzes that truly test your friends' and your own knowledge.
          Our user-friendly interface, built with ChakraUI, ensures a rich and
          intuitive experience that makes quiz creation a breeze.
        </Text>
        <Text>
          Sharing your quizzes with friends is quick and easy, thanks to our
          unique sharing links. You can send these links to your friends or even
          post them on social media, allowing others to test their skills and
          join in on the fun.
        </Text>
        <Text>
          We understand that tracking progress and performance is essential for
          growth and improvement. That's why we've developed a comprehensive
          user profile and statistics system, so you can monitor your
          achievements and compare your results with your friends.
        </Text>
        <Text>
          Our responsive design guarantees an optimized experience on different
          devices, ensuring that you can enjoy Quizard wherever you are,
          whenever you want. Whether you're on your desktop, laptop, tablet, or
          smartphone, our platform seamlessly adapts to your device for a smooth
          and enjoyable user experience.
          <br />
          Join the Quizard community today and unleash your inner quizmaster!
        </Text>
      </Box>
      <Box minH="10vh"></Box>
      <Divider orientation="horizontal" w="100%" />
      <Box minH="10vh"></Box>
    </>
  );
}

export default AboutPage;

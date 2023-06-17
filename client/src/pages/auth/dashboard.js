import "../../App.css";
import React, { useState, useEffect } from "react";
import LoadingAnimation from "../../components/LoadingText";
import ScaleOnHover from "../../components/ScaleOnHover";
import BrowseCard from "../../components/BrowseCard";

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

function Dashboard() {
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
      <Stack minH={"80vh"} w="full" direction={"column"}>
        <Box borderBottom={"1px"} my={2} py={2}>
          <Heading textAlign={"left"}>Hello, User</Heading>
          <Text>Track statistics on quizzes you've taken and created.</Text>
        </Box>
        <Box borderBottom={"1px"} my={2} py={2}>
          <Heading textAlign={"left"} as="h2">Most Popular</Heading>
          <Text>
            See your trending quizzes
          </Text>
          <Box w={"100%"} border={"2px"} h={"140px"} my={2} overflowX="scroll">
            <Stack direction={{base: "column", md: "row"}} justify={"center"} alignItems={"center"}>
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
                <BrowseCard/>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}

export default Dashboard;

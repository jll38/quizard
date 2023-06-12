import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
  FormControl,
  FormLabel,
  FormHelperText,
  HStack,
} from "@chakra-ui/react";
import RenderQuiz from "../components/RenderQuiz";

function Quiz() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/getQuiz?quizId=${id.toLocaleLowerCase()}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.quizData);
        console.log(data.quizData);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }} w="100%">
        <Flex p={8} flex={10} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"full"}>
            {isLoading ? (
              <LoadingAnimation />
            ) : (
              <RenderQuiz data={data}></RenderQuiz>
            )}
            <Button
              w={"20%"}
              color={"white"}
              bgColor={"purple.500"}
              _hover={{ bgColor: "purple.300" }}
            >
              Submit
            </Button>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export default Quiz;

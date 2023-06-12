import "../App.css";
import React, { useState, useEffect } from "react";
import { Image, Heading, Text } from "@chakra-ui/react";

function NotFound() {
  return (
    <>
      <Heading>404 Page Not Found</Heading>
      <Text>
        Sorry Mario, the page you're looking for is in another castle.
      </Text>
      <Image maxW="40px" src="static\images\toad.png"></Image>
    </>
  );
}

export default NotFound;

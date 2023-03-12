import {
    Heading,
    Text,
    Box,
    Stack,
    HStack,
    Divider,
    VStack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
export default function HeaderDiv(props) {
    return (
        <>
        <Heading size='md'>{props.text}</Heading>
        <Divider orientation='horizontal' />
        </>
    );
}
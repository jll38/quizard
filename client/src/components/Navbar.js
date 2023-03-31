import React, { useState, useEffect } from 'react';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image, LinkOverlay, LinkBox
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    
    return(
        <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <LinkBox><LinkOverlay as={'a'} href={'/'} w={'150px'}><Image src="../static/images/quizard-logo.png" w='150px' ></Image></LinkOverlay></LinkBox>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/'}>
            Home
          </Button>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/about'}>
            About
          </Button>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/quizzes'}>
            Browse
          </Button>
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'purple.500'}
            href={'/create'}
            _hover={{
              bg: 'purple.300',
            }}>
            Create
          </Button>
        </Stack>
      </Flex>
    </Box>
    );
  }


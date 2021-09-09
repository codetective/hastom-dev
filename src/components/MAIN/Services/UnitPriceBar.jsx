import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Stack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function UntiPriceBar({ p }) {
  useEffect(() => {
    document.title = p.shortTitle;
  }, [p.shortTitle]);
  return (
    <Container maxW="container.xl" px={8} pb="10">
      <Stack
        minH="70vh"
        direction={['column', 'column', 'row', 'row']}
        spacing={['20px', '20px', '40px', '40px']}
      >
        <Box
          w={['100vw', '100vw', '100%', '100%']}
          ml={['-8', '-8', '0px', '0px']}
        >
          <Image
            margin="auto"
            borderRadius="sm"
            src={'https://source.unsplash.com/800x800/?' + p.image}
            alt="some good alt text"
            objectFit={['cover', 'cover']}
            width="100%"
            height={['270px', '270px', '100%', '100%']}
          />
        </Box>

        <Stack
          w="100%"
          alignItems="flex-start"
          flexDir="column"
          justifyContent="center"
          // py="40px"
          pr="1"
        >
          <Box>
            {' '}
            <Text
              as="p"
              color="#3eb900"
              fontWeight="600"
              letterSpacing="0"
              whiteSpace="nowrap"
              fontSize="14px"
              p={0}
            >
              {p.catchPhrase}
            </Text>
            <Heading
              className="qfont"
              as="h2"
              fontSize={['24px', '28px']}
              fontWeight=" 500"
              letterSpacing="0"
              lineHeight="1.4"
              mb="5"
              p={0}
            >
              <Box
                as="span"
                display={['none', 'none', 'block', 'block']}
                class="span"
                textTransform="capitalize"
              >
                {p.title}
              </Box>
              <Box
                textTransform="capitalize"
                as="span"
                display={['block', 'block', 'none', 'none']}
                class="span"
              >
                {p.shortTitle}
              </Box>
              <span class="span"></span>
            </Heading>
            <Text as="p" pb="5" display={['none', 'none', 'block', 'block']}>
              {p.riderQuote}
            </Text>
          </Box>
          {/* 

        the duration strip begins 

        */}
          <Flex
            bg="white"
            alignItems="center"
            borderTop="1px solid"
            borderBottom="1px solid"
            borderRight="1px solid"
            borderColor="primary.100"
            h="80px"
            pl="40px"
            w={['100vw', '100vw', '100%', '100%']}
            style={{
              marginLeft: ' -40px',
            }}
          >
            <Text
              as="p"
              position="relative"
              className="green-bar-before qfont"
              fontWeight="600"
              pl="6"
            >
              12 months Duration
              <Text as="span" pl="4" color="secondary.100">
                25% - 35% ROI
              </Text>
            </Text>
          </Flex>
          {/*

         the duration strip ends

          */}
          <Box py="5">
            <Text
              as="p"
              fontWeight="bold"
              color="primary.100"
              className="qfont"
            >
              Unit Pricing : 100,000
            </Text>
            <Text as="p" pt="5" display={['block', 'block', 'none', 'none']}>
              {p.riderQuote}
            </Text>
          </Box>
          <Box>
            <Link to="/login">
              <Button
                size="sm"
                rounded="34px"
                color="white"
                bg="primary.100"
                px={'40px'}
                _hover={{
                  bg: ['secondary.100'],
                }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

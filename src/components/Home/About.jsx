import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import agronomy from '../../assets/header/agronomy.svg';
import growth from '../../assets/header/growth.svg';
import nuts from '../../assets/header/nuts.jpg';
import cashew from '../../assets/header/cashew.jpg';
import cows from '../../assets/header/cows.jpg';
import ricefarm from '../../assets/header/ricefarm.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Box id="about" bg="white" position="relative" width="100vw" py="80px">
      <Container maxW="container.xl" px={8}>
        <Stack
          minH="80vh"
          direction={['column', 'column', 'row', 'row']}
          spacing="40px"
        >
          <HStack
            width="100%"
            align="center"
            justify="center"
            spacing={['10px', '20px']}
          >
            <VStack
              align="flex-end"
              width="50%"
              spacing={['10px', '20px']}
              position="relative"
              bottom="-20px"
            >
              <Image
                src={cashew}
                w={['100%', '80%']}
                height="200px"
                objectFit="cover"
                rounded="xl"
              />
              <Image
                src={ricefarm}
                w={['60%', '55%']}
                h={['100px', '120px']}
                objectFit="cover"
                rounded="xl"
              />
            </VStack>
            <VStack
              position="relative"
              align="end"
              width="50%"
              spacing={['10px', '20px']}
            >
              <Image
                src={nuts}
                w={['60%', '60%']}
                h={['100px', '180px']}
                objectFit="cover"
                rounded="xl"
              />
              <Image
                src={cows}
                w={['100%', '90%']}
                height={['200px', '270px']}
                objectFit="cover"
                rounded="xl"
              />
            </VStack>
          </HStack>

          <Stack
            w="100%"
            alignItems="flex-start"
            flexDir="column"
            justifyContent="center"
            py="40px"
            pr="1"
          >
            <Text
              as="p"
              color="#3eb900"
              fontWeight="600"
              letterSpacing="0"
              whiteSpace="nowrap"
              fontSize="14px"
              p={0}
            >
              About Us
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
              <span class="span">We are here to farm and </span>
              <span class="span"></span>

              <Text as="span">
                <br />
                harvest awesomeness
              </Text>
            </Heading>

            <Text
              as="p"
              pt="2"
              mb={10}
              position="relative"
              pl={6}
              className="green-bar-before"
            >
              We are on a journey to create a more efficient agricultural system
              that largely contributes to unlocking Africa’s full Agricultural
              potential.
            </Text>
            <Stack py={4} spacing="20px">
              <Flex alignItems="center">
                <Image src={agronomy} w="30px" />
                <Heading
                  as="h4"
                  className="qfont"
                  fontWeight="400"
                  fontSize={['18px', '20px']}
                  pl={2}
                >
                  Awesome Farm Management
                </Heading>
              </Flex>
              <Flex alignItems="center">
                <Image src={growth} w="30px" />
                <Heading
                  as="h4"
                  className="qfont"
                  fontWeight="400"
                  fontSize={['18px', '20px']}
                  pl={1}
                >
                  Certified Food Processing
                </Heading>
              </Flex>
            </Stack>
            <Link
              style={{
                color: '#f8a22f',
              }}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              fontWeight="bold"
              className="qfont"
              to="/about"
            >
              Learn more
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;

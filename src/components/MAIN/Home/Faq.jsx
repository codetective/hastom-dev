import React from 'react';
import { Box, Flex, Text, Heading, Image, Button } from '@chakra-ui/react';
import cowstrip from '../../../assets/home/faqcows.jpg';
import Logo from '../../../components/MAIN/Nav/Logo';
import { Link } from 'react-router-dom';

function FAQ() {
  return (
    <Box id="faq" position="relative" width="100vw">
      <Box height="35vh" position="relative">
        <Image src={cowstrip} width="100%" height="100%" objectFit="cover" />
        <Box position="absolute" bottom="-70px" width="100%">
          <Flex
            height="180px"
            width="180px"
            bg="white"
            shadow="md"
            alignItems="center"
            justifyContent="center"
            margin="auto"
            rounded="full"
          >
            <Logo />
          </Flex>
        </Box>
      </Box>
      <Box bg="white" textAlign="center" pt={'6rem'} pb={'6rem'}>
        <Text
          as="p"
          color="#3eb900"
          fontWeight="600"
          letterSpacing="0"
          whiteSpace="nowrap"
          fontSize="14px"
          p={0}
        >
          Dive into the Agro Space
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
          <Text as="span">
            Begin your fulfilling <br />
            Agricultural and Real Estate experience with{' '}
          </Text>
          <Text as="span">Hastom</Text>
        </Heading>
        <Button
          as={Link}
          to="/contact"
          size="sm"
          rounded="34px"
          color="white"
          bg="primary.100"
          px={'40px'}
          _hover={{
            bg: ['secondary.100'],
          }}
        >
          Invest Now
        </Button>
      </Box>
    </Box>
  );
}

export default FAQ;

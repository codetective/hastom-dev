import Logo from '../Nav/Logo';
import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  Container,
  Box,
  HStack,
  Text,
  Stack,
  VStack,
  Flex,
} from '@chakra-ui/react';

const links1 = [
  {
    page: 'Home',
    route: '/',
  },

  {
    page: 'About',
    route: '/about',
  },
  {
    page: 'Services',
    route: '/services',
  },
  {
    page: 'Blog',
    route: '/blog',
  },
];

function Footer() {
  return (
    <Box py={'80px'} bg="#222222">
      <Container maxW="container.xl" px={8}>
        <Stack
          spacing="40px"
          justify="center"
          align="top"
          direction={['column', 'column', 'row', 'row']}
        >
          <Stack spacing="20px" width="100%">
            <Logo />
            <Text color="textDark.100">
              Hastom - unlocking Africa’s Agricultural full potential
            </Text>
            <HStack spacing="20px">
              <Box
                as="a"
                href="https://web.facebook.com/hastomnigeria/"
                border="1px solid #339900"
                transition="all .3s ease"
                _hover={{
                  bg: 'secondary.100',
                  color: 'primary.100',
                  transform: 'scale(1.3)',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="secondary.100"
                width="30px"
                height="30px"
                borderRadius="50%"
              >
                <FaFacebookF />
              </Box>

              <Box
                as="a"
                href="https://www.instagram.com/hastomnigeria/"
                border="1px solid #339900"
                transition="all .3s ease"
                _hover={{
                  bg: 'secondary.100',
                  color: 'primary.100',
                  transform: 'scale(1.3)',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="secondary.100"
                width="30px"
                height="30px"
                borderRadius="50%"
              >
                <FaInstagram />
              </Box>
              <Box
                as="a"
                href="https://www.youtube.com/channel/UCUBf8cW3e01bNn6cmsQGRgg"
                border="1px solid #339900"
                transition="all .3s ease"
                _hover={{
                  bg: 'secondary.100',
                  color: 'primary.100',
                  transform: 'scale(1.3)',
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="secondary.100"
                width="30px"
                height="30px"
                borderRadius="50%"
              >
                <FaYoutube />
              </Box>
            </HStack>
          </Stack>

          <Stack
            direction="row"
            width="100%"
            spacing="40px"
            justify={['left', 'left', 'center', 'center']}
            pt="4"
          >
            <VStack spacing="15px">
              {links1.map((l, i) => {
                return (
                  <Link to={l.route} key={i}>
                    <Text color="textDark.100">{l.page}</Text>
                  </Link>
                );
              })}
            </VStack>
          </Stack>

          <Stack spacing="20px" w="100%" pt="4">
            <Box>
              <Flex alignItems="center">
                <Box as="span" color="secondary.100" pr="2">
                  <MdLocationOn />
                </Box>
                <Text color="secondary.100" fontWeight="bold">
                  Address
                </Text>
              </Flex>
              <Text color="textDark.100" as="p">
                Hastom Cashew Center, Adebayo Alata.
              </Text>
              <Text as="p">Industrial Layout, Ogbomoso, Oyo State.</Text>
            </Box>
            <Box>
              <Flex alignItems="center">
                <Box as="span" color="secondary.100" pr="2">
                  <FaPhoneAlt />
                </Box>
                <Text color="secondary.100" fontWeight="bold">
                  Contact
                </Text>
              </Flex>
              <Text color="textDark.100" as="p">
                <a href="tel:+2348163013001">(+234) 8163013001</a>
              </Text>
              <Text color="textDark.100" as="p">
                <a href="mailto:hello@hastomnigeria.com">
                  hello@hastomnigeria.com
                </a>
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;

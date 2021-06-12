import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Button,
} from '@chakra-ui/react';
import header from '../../assets/header/header.jpg';
import y_leaf from '../../assets/header/y-leaf.png';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Header() {
  return (
    <Box
      as="header"
      bg={['rgba(000,000,000,0.5)', 'white']}
      position="relative"
      mt="-90px"
      left="0"
      width="100vw"
    >
      <Container maxW="container.xl" px={8}>
        <img
          class="y-leaf"
          style={{
            position: 'absolute',
            top: '60vh',
            left: '-15vw',
            transform: 'scale(0.7)',
            zIndex: '10',
          }}
          alt=" "
          src={y_leaf}
        />

        <Flex wrap h="100vh" w={['100%', '100vw']} id="header-flex">
          <Flex
            flexBasis={['100%', '50%']}
            alignItems="flex-start"
            flexDir="column"
            justifyContent="center"
            py="100px"
            pr="1"
          >
            <Text
              as="p"
              color="#3eb900"
              font-weight="600"
              letter-spacing="0"
              white-space="nowrap"
              font-size="14px"
              p={0}
            >
              Invest with Hastom
            </Text>

            <Heading
              className="qfont"
              as="h2"
              fontWeight=" 500"
              letterSpacing="0"
              lineHeight="1.4"
              mb="5"
              p={0}
              color={['whitesmoke', 'initial', 'initial']}
            >
              <span class="span">Do you want to Own a </span>
              <span class="span"></span>
              <Text as="span" color="primary.100">
                farm
              </Text>
              <Text as="span">
                ?<br />
                Start your journey{' '}
              </Text>
              <Text as="span" color="secondary.100">
                today
              </Text>
            </Heading>

            <Text as="p" mb={10} color={['#fdfdfdcc', 'textDark.100']}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore
            </Text>

            <Button
              backgroundColor="#3eb900"
              borderRadius="45px"
              textAlign="center"
              height="40px"
              padding="10px 40px"
              color="#ffffff"
              fontSize="14px"
              fontWeight="500"
              whiteSpace="nowrap"
              outline="none"
              border="none"
            >
              Get Started
            </Button>
          </Flex>

          <Box
            flex="1"
            h="100%"
            position={['absolute', 'relative']}
            top="0px"
            left="0"
            zIndex={['-1', 0]}
            bg="white"
          >
            <Image
              borderBottomLeftRadius={['0%', '90%']}
              src={header}
              h="100%"
              objectFit="cover"
            />
          </Box>
          <Box
            position="absolute"
            bottom="30px"
            left="0"
            width="100%"
            display="flex"
            alignItems="center"
            color="secondary.100"
            fontSize="40px"
            boxShadow="none"
            justifyContent="center"
            zIndex="11"
          >
            <AnchorLink
              href="#about"
              userSelect="none"
              _focus={{
                boxShadow: 'none',
              }}
            >
              <motion.div
                animate={{ translateY: '20px' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                <FaAngleDoubleDown />
              </motion.div>
            </AnchorLink>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;

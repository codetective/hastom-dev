import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  HStack,
  Stack,
  Circle,
  Icon,
  Button,
} from '@chakra-ui/react';

import { AiFillFilePdf, AiOutlineDownload } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function FileCard({ r, marginRight, ...rest }) {
  return (
    <HStack
      style={{
        marginRight: marginRight || '0px',
      }}
      {...rest}
      mr="40px"
      spacing="10px"
      py="3"
      px="4"
      border="1px solid"
      borderColor="primary.100"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="md"
      bg="white"
    >
      <Box>
        <Icon as={AiFillFilePdf} fontSize="35px" mr="4" />
        <Text as="small" className="qfont">
          {r}
        </Text>
      </Box>
      <Icon fontSize="35px" as={AiOutlineDownload} color="secondary.100" />
    </HStack>
  );
}

function Resources({ p }) {
  return (
    <Box width="100vw" position="relative">
      <Container maxW="container.xl" px={8}>
        <Stack
          spacing="40px"
          wrap
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          flexDir={['column', 'column', 'row', 'row']}
          minH="360px"
          py="80px"
        >
          <Stack
            w={['100%', '100%', '50%', '50%']}
            alignItems="flex-start"
            flexDir="column"
            justifyContent="center"
            pr="1"
            height="100%"
          >
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
              <span class="span">Don't just invest, you own a </span>
              <span class="span">farm, we make that happen. Get </span>

              <Text as="span">
                {/* <br /> */}
                more insight then let's begin
              </Text>
            </Heading>
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
          <Stack
            width={['100%', '100%', '40%', '40%']}
            alignItems="flex-end"
            spacing="30px"
          >
            {p.resources.length !== 0 &&
              p.resources.map((r, i) => {
                if (i === 1) {
                  return (
                    <>
                      <FileCard
                        marginRight="40px"
                        display={['none', 'none', 'flex', 'flex']}
                        r={r}
                      />
                      <FileCard
                        display={['flex', 'flex', 'none', 'none']}
                        r={r}
                      />
                    </>
                  );
                } else {
                  return <FileCard r={r} />;
                }
              })}
            {p.resources.length === 0 && (
              <>
                <FileCard r={'Coming Soon ...'} />
                <FileCard
                  display={['flex', 'flex', 'none', 'none']}
                  r={'Coming Soon ...'}
                />
                <FileCard
                  marginRight="40px"
                  display={['none', 'none', 'flex', 'flex']}
                  r={'Coming Soon ...'}
                />
                <FileCard r={'Coming Soon ...'} />
              </>
            )}
          </Stack>
        </Stack>
      </Container>

      {/* The two circles begin */}
      <Circle
        width="50px"
        zIndex="10"
        height="50px"
        background="#339900"
        borderRadius="50%"
        position="absolute"
        left="150px"
        bottom="-25px"
        bg="white"
      >
        <Box rounded="full" height="20px" w="20px" bg="primary.100" />
      </Circle>
      <Circle
        width="50px"
        zIndex="10"
        height="50px"
        background="#339900"
        borderRadius="50%"
        position="absolute"
        left="150px"
        top="-25px"
        bg="white"
      >
        <Box rounded="full" height="20px" w="20px" bg="primary.100" />
      </Circle>
    </Box>
  );
}

export default Resources;

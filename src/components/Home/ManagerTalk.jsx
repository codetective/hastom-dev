import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Avatar,
  HStack,
  Stack,
  Image,
} from '@chakra-ui/react';
import manager from '../../assets/header/manager.jpg';
import cowStrip from '../../assets/header/cowStrip.jpg';
import nuts from '../../assets/header/nuts.jpg';
import { BsArrowRight } from 'react-icons/bs';

function ManagerTalk() {
  return (
    <Box
      position="relative"
      _before={{
        content: "''",
        width: '50px',
        height: '50px',
        background: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: '-25px',
        left: '200px',
        zIndex: '10',
      }}
      _after={{
        content: "''",
        width: '50px',
        zIndex: '10',
        height: '50px',
        background: '#339900',
        borderRadius: '50%',
        position: 'absolute',
        bottom: '-30px',
        right: '60%',
      }}
    >
      {' '}
      <Box
        bg="primary.100"
        left="0"
        width="100vw"
        position="relative"
        height={['fit-content', 'fit-content', 'fit-content', 'fit-content']}
        overflowY="hidden"
      >
        <Container maxW="container.xl" px={8}>
          <Flex wrap w="100%" flexDir={['column', 'column', 'row', 'row']}>
            <Stack
              w={['100%', '100%', '90%', '40%']}
              alignItems="flex-start"
              flexDir="column"
              justifyContent="center"
              py="50px"
              pr="1"
            >
              <Text
                as="p"
                color="white"
                font-weight="600"
                letter-spacing="0"
                white-space="nowrap"
                font-size="14px"
                position="relative"
                pl={3}
                _before={{
                  content: "''",
                  width: '0',
                  height: '100%',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  borderRight: '4px solid #fa822f',
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              >
                Investment Plans
              </Text>

              <Heading
                className="qfont"
                as="h4"
                fontSize={['20px', '28px']}
                fontWeight=" 400"
                letterSpacing="0"
                color="white"
                lineHeight="1.6"
                mb="5"
                p={0}
                py="3"
              >
                <span class="span">"Let's begin your journey with a </span>
                <span class="span">
                  farm full of bountiful harvest and good{' '}
                </span>

                <Text as="span">management"</Text>
              </Heading>

              <HStack>
                <Avatar
                  name="Debo Thomas"
                  size="md"
                  src={manager}
                  border="2px solid #fa822f"
                />
                <Text as="small" fontSize="14px" color="#fcfcfc">
                  Mr Debo Thomas || CEO
                </Text>
              </HStack>
            </Stack>

            <Stack
              w={['100%', '100%', '50%', '50%']}
              display={['none', 'none', 'none', 'flex']}
              height="100%"
              borderRadius="1000px 0% 0% 1000px"
              bg="white"
              align="flex-end"
              position={['initial', 'initial', 'absolute', 'absolute']}
              top="0px"
              right="0"
              justify="center"
              pr={['35px', '35px', '35px', '65px']}
              pl="40px"
              py="45px"
              spacing="30px"
            >
              <Box
                border="1px solid green"
                shadow="lg"
                w="100%"
                maxW="92%"
                borderRadius="1000px 0% 0% 1px"
                pr="4"
              >
                <HStack p="10px" align="top" justify="space-between">
                  <HStack spacing="20px" alignSelf="center">
                    <Box width="25%" h="100%" pl="1">
                      <Image
                        src={cowStrip}
                        objectFit="cover"
                        borderRadius="1000px 0% 0% 1px"
                      />
                    </Box>
                    <Box>
                      <Text as="h3" className="qfont" fontSize="17px">
                        {' '}
                        Ranching and Cattle Investment
                      </Text>
                      <Text as="p" fontSize="15px">
                        {' '}
                        19 months germination{' '}
                      </Text>
                      <Text as="p" color="secondary.100" fontSize="15px">
                        ( Roi 45% )
                      </Text>
                    </Box>
                  </HStack>

                  <Box
                    as="span"
                    fontSize="20px"
                    pt="5px"
                    color="textDarker.100"
                  >
                    <BsArrowRight />
                  </Box>
                </HStack>
              </Box>

              <Box
                border="1px solid green"
                shadow="lg"
                w="100%"
                maxW="92%"
                pr="4"
                borderRadius="1px 0% 0% 1000px"
              >
                <HStack p="10px" align="top" justify="space-between">
                  <HStack spacing="20px" alignSelf="center">
                    <Box width="25%" h="100%" pl="1">
                      <Image
                        src={nuts}
                        objectFit="cover"
                        borderRadius="1px 0% 0% 1000px"
                      />
                    </Box>
                    <Box>
                      <Text as="h3" className="qfont" fontSize="17px">
                        {' '}
                        Cashew Revival Park
                      </Text>
                      <Text as="p" fontSize="15px">
                        {' '}
                        19 months germination{' '}
                      </Text>
                      <Text as="p" color="secondary.100" fontSize="15px">
                        ( Roi 45% )
                      </Text>
                    </Box>
                  </HStack>

                  <Box
                    as="span"
                    fontSize="20px"
                    pt="5px"
                    color="textDarker.100"
                  >
                    <BsArrowRight />
                  </Box>
                </HStack>
              </Box>
            </Stack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export default ManagerTalk;

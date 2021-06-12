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
import potatoStrip from '../../assets/header/potatoStrip.jpg';
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
        right: '50%',
      }}
    >
      {' '}
      <Box
        bg="primary.100"
        left="0"
        width="100vw"
        position="relative"
        height={['fit-content', 'fit-content', '350px', '350px']}
        overflowY="hidden"
      >
        <Container maxW="container.xl" px={8}>
          <Flex wrap w="100%" flexDir={['column', 'column', 'row', 'row']}>
            <Stack
              w={['100%', '100%', '40%', '40%']}
              alignItems="flex-start"
              flexDir="column"
              justifyContent="center"
              py="40px"
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
                  borderRight: '5px solid #fa822f',
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                }}
              >
                Investment Plans
              </Text>

              <Heading
                className="qfont"
                as="h2"
                fontSize={['24px', '28px']}
                fontWeight=" 500"
                letterSpacing="0"
                color="white"
                lineHeight="1.4"
                mb="5"
                p={0}
              >
                <span class="span">"Let's begin your journey with a </span>
                <span class="span">
                  farm full of bountiful harvest and good{' '}
                </span>

                <Text as="span">
                  {/* <br /> */}
                  management"
                </Text>
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
              w={['100%', '100%', '55%', '55%']}
              display={['none', 'none', 'flex', 'flex']}
              height={['300px', '300px', '500px', '500px']}
              borderLeftRadius="50%"
              bg="white"
              align="flex-end"
              position={['initial', 'initial', 'absolute', 'absolute']}
              top="-85px"
              right="0"
              justify="center"
              pr={['35px', '35px', '35px', '65px']}
              pl="20px"
              spacing="20px"
            >
              <Box
                border="1px solid green"
                borderTopLeftRadius="100px"
                shadow="lg"
                w="100%"
                maxW="600px"
                pr="3"
              >
                <HStack
                  borderBottomLeftRadius="100px"
                  p="10px"
                  align="top"
                  justify="space-between"
                >
                  <HStack spacing="20px">
                    <Box width="30%" height="100%">
                      <Image
                        src={cowStrip}
                        objectFit="cover"
                        borderTopLeftRadius="100px"
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
                borderBottomLeftRadius="100px"
                shadow="lg"
                w="100%"
                maxW="600px"
                pr="3"
              >
                <HStack
                  borderBottomLeftRadius="100px"
                  p="10px"
                  align="top"
                  justify="space-between"
                >
                  <HStack spacing="20px">
                    <Box width="30%" height="100%">
                      <Image
                        src={potatoStrip}
                        objectFit="cover"
                        borderBottomLeftRadius="100px"
                      />
                    </Box>
                    <Box>
                      <Text as="h3" className="qfont" fontSize="17px">
                        {' '}
                        Cashew Revival Pack
                      </Text>
                      <Text as="p" fontSize="15px">
                        {' '}
                        21 months germination{' '}
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

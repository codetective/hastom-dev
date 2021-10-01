import React from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Heading,
} from '@chakra-ui/react';

export default function OurServices() {
  return (
    <Box
      id="how_we_do_it"
      py="80px"
      pos="relative"
      _before={{
        content: '""',
        width: '100px',
        height: '100px',
        background: 'white',
        opacity: '0.5',
        border: '20px solid rgb(248, 162, 42)',
        borderRadius: '50%',
        position: 'absolute',
        top: '2%',
        left: '-50px',
        zIndex: '-1',
      }}
    >
      <Container maxW="container.xl" px={8}>
        <Stack>
          <SimpleGrid spacing="20" columns={[1, 1, 1, 2]}>
            <Stack justify="center">
              <Heading
                className="qfont"
                as="h2"
                fontSize={['24px', '28px']}
                letterSpacing="0"
                lineHeight="1.33"
                fontWeight="bold"
                p={0}
              >
                <Text as="span">Our Services</Text>
              </Heading>

              <Text as="p" mt="4" className="afont">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                deleniti odio comm to help Nigerians looking to secure their
                future with Agriculture.
              </Text>
              <Text as="p" mt="4" className="afont">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                deleniti odio comm to help Nigerians looking to secure their
                future with Agriculture.
              </Text>
            </Stack>
            <SimpleGrid spacing="8" columns={[1, 2, 2, 2]}>
              <Box
                boxShadow="lg"
                m="auto"
                bg="white"
                borderRadius="5px"
                border="1px solid green"
              >
                <Stack>
                  <Box p="7">
                    <Stack>
                      <Heading
                        className="qfont"
                        as="p"
                        color="black"
                        fontSize="20px"
                        letterSpacing="0"
                        lineHeight="1.33"
                        fontWeight="500"
                      >
                        CASHEW REVIVAL PLAN
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem, deleniti.
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
              <Box
                boxShadow="lg"
                m="auto"
                bg="white"
                borderRadius="5px"
                border="1px solid green"
              >
                <Stack>
                  <Box p="7">
                    <Stack>
                      <Heading
                        className="qfont"
                        as="p"
                        color="black"
                        fontSize="20px"
                        letterSpacing="0"
                        lineHeight="1.33"
                        fontWeight="500"
                      >
                        CATTLE RANCH
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem, deleniti.
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
              <Box
                boxShadow="lg"
                m="auto"
                bg="white"
                borderRadius="5px"
                border="1px solid green"
              >
                <Stack>
                  <Box p="7">
                    <Stack>
                      <Heading
                        className="qfont"
                        as="p"
                        color="black"
                        fontSize="20px"
                        letterSpacing="0"
                        lineHeight="1.33"
                        fontWeight="500"
                      >
                        FARMLANDS
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem, deleniti.
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
              <Box
                boxShadow="lg"
                m="auto"
                bg="white"
                borderRadius="5px"
                border="1px solid green"
              >
                <Stack>
                  <Box p="7">
                    <Stack>
                      <Heading
                        className="qfont"
                        as="p"
                        color="black"
                        fontSize="20px"
                        letterSpacing="0"
                        lineHeight="1.33"
                        fontWeight="500"
                      >
                        AGRICULTURAL INSTITUTE
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dolorem, deleniti.
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </SimpleGrid>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

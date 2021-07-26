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
                We are here to give you a fulfilling experience in Agriculture
                and Real Estate
              </Text>
              <Text as="p" mt="4" className="afont">
                With a focus on quality food production and agricultural
                education, we are determined to evolve and see to the
                transformation of Agriculture in Africa. Our goal is to create a
                more efficient agricultural system that largely contributes to
                the development of A Better Nigeria, Africa and the world at
                large.
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
                        textTransform="uppercase"
                      >
                        Cashew farm set up and trade
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Setting up of cashew farms and aggregation of cashew
                        from LBAs
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
                        textTransform="uppercase"
                      >
                        Agricultural Institute
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Diffusion of agricultural knowledge and best practices
                        in Africa
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
                        textTransform="uppercase"
                      >
                        Farmland
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Sales and acquisition of problem free farmlands in all
                        Nigerian states
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
                        textTransform="uppercase"
                      >
                        Beef Processing
                      </Heading>

                      <Text as="small" className="qfont" color="textDark.100">
                        Providing certified healthy beef produce within your
                        reach
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

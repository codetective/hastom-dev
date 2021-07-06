import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../components/Nav/Logo';
import farm from '../assets/about/farm.jpg';
// import seeds from '../assets/about/seeds.jpg';
// import planting from '../assets/about/planting.jpg';
// import harvest from '../assets/about/harvest.jpg';
import ceo from '../assets/about/ceo.jpg';
import marketer from '../assets/about/marketer.jpg';
import trade from '../assets/about/trade.jfif';
import OurStory from '../components/About/OurStory';
import StaffCard from '../components/About/StaffCard';

function AboutPage() {
  return (
    <>
      <Box height="40vh" position="relative">
        <Image src={farm} width="100%" height="100%" objectFit="cover" />
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
      <Box bg="white" textAlign="center" pt={'6rem'} pb={'4rem'}>
        <Text
          as="p"
          color="#3eb900"
          font-weight="600"
          letter-spacing="0"
          white-space="nowrap"
          font-size="14px"
          p={0}
        >
          About Us
        </Text>

        <Heading
          className="afont"
          as="h2"
          fontSize={['24px', '28px']}
          fontWeight=" 500"
          letterSpacing="0"
          lineHeight="1.4"
          mb="5"
          p={0}
        >
          <Text as="span">
            We have a great mission: <br />
          </Text>
          <Text as="span" className="qfont" color="primary.100">
            Food Sufficiency!
          </Text>
        </Heading>
        <Container maxW="container.lg" pb="5">
          <Text as="p">
            Hastom is a leading agricultural real estate, crop and livestock
            farm company focused on orienting, facilitating the development of
            agriculture in Nigeria. Experienced in cultivation and trade of
            cashew as well as rearing of cattle, we offer agro-consulting
            services aimed at setting up profitable agribusinesses that promote
            rural development. With a focus on quality food production and
            agricultural education, we are determined to evolve and see to the
            transformation of Agriculture in Africa. Our goal is to create a
            more efficient agricultural system that largely contributes to the
            development of A Better Nigeria, Africa and the world at large.
          </Text>
        </Container>

        <AnchorLink
          href="#how_we_do_it"
          userSelect="none"
          _focus={{
            boxShadow: 'none',
          }}
        >
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
            See how we do it
          </Button>
        </AnchorLink>
      </Box>

      {/* begins ourservices */}
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
      <Box bg="white" py="40px">
        <Container maxW="container.xl">
          <OurStory />
        </Container>
      </Box>
      <Box id="team" py="80px">
        <Container maxW="container.xl">
          <Stack>
            <Text
              as="p"
              color="#3eb900"
              fontWeight="600"
              letter-spacing="0"
              white-space="nowrap"
              font-size="14px"
              p={0}
            >
              Our Team
            </Text>
            <Heading
              className="qfont"
              as="h2"
              fontSize={['24px', '28px']}
              fontWeight=" 500"
              letterSpacing="0"
              lineHeight="1.4"
              mb="3"
              p={0}
            >
              <Text as="span">The Amazing People Who Run Hastom</Text>
            </Heading>

            <SimpleGrid spacing="30px" columns={[1, 2, 3, 5]}>
              <StaffCard
                src={ceo}
                heading={'Ceo Name Here'}
                text={'CEO, Hastom Farms'}
              />
              <StaffCard
                src={trade}
                heading={'Staff Name Here'}
                text={'Media Publicity'}
              />
              <StaffCard
                src={marketer}
                heading={'MD Name Here'}
                text={'Technical Advisor'}
              />
              <StaffCard
                src={trade}
                heading={'Staff Name Here'}
                text={'Finance Manager'}
              />
              <StaffCard
                src={marketer}
                heading={'MD Name Here'}
                text={'MD, Hastom Farms'}
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default AboutPage;

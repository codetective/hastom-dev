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
import OurServices from '../components/About/OurServices';

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
          fontWeight="600"
          letterSpacing="0"
          whiteSpace="nowrap"
          fontSize="14px"
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
            Facilitating the development of agriculture in Africa
          </Text>
        </Heading>
        <Container maxW="container.lg" pb="5">
          <Text as="p">
            Hastom is a purpose-led agricultural and real estate company focused
            on orienting, facilitating the development of agriculture in Africa.
            Experienced in cultivation and trade of cashew as well as rearing of
            cattle, we offer agro-consulting services aimed at setting up
            profitable agribusinesses that promote rural development.
          </Text>
          <Text as="p">
            With a focus on quality food production and agricultural education,
            we are determined to evolve and see to the transformation of
            Agriculture in Africa. Our goal is to create a more efficient
            agricultural system that largely contributes to the development of A
            Better Nigeria, Africa and the world at large.
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

      <OurServices />
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
              letterSpacing="0"
              whiteSpace="nowrap"
              fontSize="14px"
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
                heading={'Mr Debo Thomas'}
                text={'CEO, Hastom Farms'}
              />
              <StaffCard
                src={trade}
                heading={'Enoch Adeniyi '}
                text={'Media Manager'}
              />
              <StaffCard
                src={marketer}
                heading={'Oluwatobiloba Onisemo '}
                text={'Head of Operations'}
              />
              <StaffCard
                src={trade}
                heading={'Tunde Ogunmuyiwa'}
                text={'Livestock Farm Manager'}
              />
              <StaffCard
                src={marketer}
                heading={'Moses Adeoye '}
                text={'Crop Farm Manager'}
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default AboutPage;

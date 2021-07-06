import React, { useEffect } from 'react';
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
import seeds from '../assets/about/seeds.jpg';
import planting from '../assets/about/planting.jpg';
import harvest from '../assets/about/harvest.jpg';
import ceo from '../assets/about/ceo.jpg';
import marketer from '../assets/about/marketer.jpg';
import trade from '../assets/about/trade.jfif';
import OurStory from '../components/About/OurStory';
import StaffCard from '../components/About/StaffCard';
import OurProcessCard from '../components/About/OurProcessCard';

function AboutPage() {
  useEffect(() => {
    document.title = 'About Hastom Farms';
  }, []);
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
            Our main goal is to redue food insufficiency and aid practical
            agriculture for everyone interested Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Amet, repellat.
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
      <Box id="how_we_do_it" py="80px">
        <Container maxW="container.xl">
          <Stack>
            <Text
              as="p"
              color="#3eb900"
              font-weight="600"
              letter-spacing="0"
              white-space="nowrap"
              font-size="14px"
              p={0}
            >
              Our Process
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
              <Text as="span">From the earth to your home!</Text>
            </Heading>
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              deleniti.
            </Text>
            <SimpleGrid spacing="30px" columns={[1, 1, 3, 3]}>
              <OurProcessCard
                src={seeds}
                num={1}
                heading={'Careful seed selection'}
              />
              <OurProcessCard
                src={planting}
                num={2}
                heading={'best planting practices'}
              />
              <OurProcessCard
                src={harvest}
                num={3}
                heading="bountiful fresh  harvest"
              />
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
              font-weight="600"
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
            <Text as="p">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
              deleniti.
            </Text>
            <SimpleGrid spacing="30px" columns={[1, 1, 3, 3]}>
              <StaffCard
                src={ceo}
                heading={'Ceo Name Here'}
                text={'CEO, Hastom Farms'}
              />
              <StaffCard
                src={marketer}
                heading={'MD Name Here'}
                text={'MD, Hastom Farms'}
              />
              <StaffCard
                src={trade}
                heading={'Staff Name Here'}
                text={'Finance Manager, Hastom Farms'}
              />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default AboutPage;

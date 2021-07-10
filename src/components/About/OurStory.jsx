import {
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Box,
} from '@chakra-ui/react';

import history from '../../assets/about/history.jpg';

export default function OurStory() {
  return (
    <Box py="80px">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={8}>
          <Text
            as="p"
            color="#3eb900"
            fontWeight="600"
            letterSpacing="0"
            whiteSpace="nowrap"
            fontSize="14px"
            p={0}
          >
            Our Journey
          </Text>
          <Heading className="qfont">
            We are farmers with a mission and a grand vision.
          </Heading>
          <Text color={'gray.500'} fontSize={'md'} as="p">
            With the bleak future of crude oil threatening the future of
            Nigeria’s Economy, Hastom Global services was established in 2012 to
            help Nigerians looking to secure their future with Agriculture.
          </Text>
          <Text color={'gray.500'} fontSize={'md'} as="p">
            Finding the perfect farmland free from dispute was a major concern
            that paralyzed most aspiring farmers home and abroad and Hastom was
            designed to alleviate those concerns and facilitate the journey of
            these new farmers.
          </Text>
          <Text color={'gray.500'} fontSize={'md'} as="p">
            In 2017, Hastom Global Services was separated into 2 sister
            companies, Hastom Properties & Hastom Food & Farms; Hastom
            Properties to oversee acquisition and sales of arable and problem
            free farmlands while Hastom Food & Farms to oversee the set up and
            management of farms acquired from Hastom Properties.
          </Text>
          <Text color={'gray.500'} fontSize={'md'} as="p">
            Since we started out, Hastom Food & Farms has championed absentee
            farming in Nigeria, engages in Cashew trade at a total volume of
            about 6,000 metric tonnes since 2019, and has also been involved in
            beef processing of live cattle sourced directly from our farm.
            Hastom properties on the other hand, has helped aspiring farmers
            acquire over 15,000 acres of farmlands and is still expanding its
            capacity to help more farmers secure farmlands in different states
            in Nigeria.
          </Text>
        </Stack>
        <Flex maxH="90%" h="auto">
          <Image
            rounded={'md'}
            objectFit="cover"
            alt={'feature image'}
            src={history}
            w="100%"
            h="auto"
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt="50px">
        <Stack
          spacing="5"
          bg="white"
          boxShadow="md"
          position="relative"
          p="8"
          _before={{
            content: '""',
            width: '50px',
            height: '50px',
            border: '15px solid rgb(248, 162, 47)',
            background: 'rgb(255, 255, 255)',
            borderRadius: '50%',
            position: 'absolute',
            top: '-25px',
            left: '-10px',
            zIndex: '10',
          }}
        >
          <Heading className="qfont">Mission</Heading>
          <Text color={'gray.500'} fontSize={'md'} as="p">
            To facilitate the development of agriculture in Africa through; real
            estate, quality agricultural - education, agro-tourism and food
            production.
          </Text>
        </Stack>
        <Stack
          spacing="5"
          bg="white"
          boxShadow="md"
          p="8"
          pos="relative"
          _before={{
            content: '""',
            width: '50px',
            height: '50px',
            border: '15px solid rgb(248, 162, 47)',
            background: 'rgb(255, 255, 255)',
            borderRadius: '50%',
            position: 'absolute',
            top: '-25px',
            left: '-10px',
            zIndex: '10',
          }}
        >
          <Heading className="qfont">Vision</Heading>
          <Text color={'gray.500'} fontSize={'md'} as="p">
            To be a catalyst in unlocking Africa’s Agricultural full potential
            to become the global leader in food production.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}

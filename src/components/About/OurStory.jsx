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
        <Stack spacing={4}>
          <Text
            as="p"
            color="#3eb900"
            font-weight="600"
            letter-spacing="0"
            white-space="nowrap"
            font-size="14px"
            p={0}
          >
            Who We Are
          </Text>
          <Heading className="qfont">
            We are farmers with a mission and a grand vision.
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'} as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            aspernatur sint architecto totam omnis rem ea enim quibusdam, sed
            velit voluptatem reprehenderit assumenda sunt fuga recusandae.
            Pariatur ex porro nobis quia, neque, molestias error architecto
            dolor odit eligendi ab assumenda alias aperiam sit ducimus hic culpa
            quaerat minima, fugit labore.
          </Text>
        </Stack>
        <Flex maxH="450px">
          <Image
            rounded={'md'}
            objectFit="cover"
            alt={'feature image'}
            src={history}
          />
        </Flex>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pt="50px">
        <Stack spacing="5">
          <Text
            textTransform={'uppercase'}
            color={'secondary.100'}
            fontWeight={600}
            fontSize={'sm'}
            p={1}
            px="2"
            bg="orange.100"
            opacity=".5"
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            SubHeading
          </Text>
          <Text a="p" style={{ marginTop: '0' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            unde quod libero nesciunt obcaecati necessitatibus, debitis esse
            atque reiciendis laudantium quae officia nemo tenetur consectetur
            aliquid ex, sit facilis. Corporis, quisquam atque odio quae
            doloribus voluptatibus doloremque. Doloremque rerum iusto qui
            pariatur necessitatibus est culpa commodi cupiditate earum, iure
            corporis.
          </Text>
        </Stack>
        <Stack>
          <Text
            textTransform={'uppercase'}
            color={'secondary.100'}
            fontWeight={600}
            fontSize={'sm'}
            p={1}
            px="2"
            bg="orange.100"
            opacity=".5"
            alignSelf={'flex-start'}
            rounded={'md'}
          >
            SubHeading
          </Text>
          <Text a="p" style={{ marginTop: '0' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            unde quod libero nesciunt obcaecati necessitatibus, debitis esse
            atque reiciendis laudantium quae officia nemo tenetur consectetur
            aliquid ex, sit facilis. Corporis, quisquam atque odio quae
            doloribus voluptatibus doloremque. Doloremque rerum iusto qui
            pariatur necessitatibus est culpa commodi cupiditate earum, iure
            corporis.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}

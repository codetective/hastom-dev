import React from 'react';
import {
  Container,
  Box,
  Text,
  HStack,
  Stack,
  Heading,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';
import herd from '../../assets/blog/herd.jpg';
import cashew from '../../assets/blog/cashew.jpg';
import greenhouse from '../../assets/blog/greenhouse.jpeg';
import { AuthorCategory } from '../Blog/LatestArticle';
import { BsArrowRight } from 'react-icons/bs';

const posts = [
  {
    image: herd,
    date: '12 Jun 2021',
    sample:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    author: 'Debo Ajikede',
    category: 'Technology',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    image: cashew,
    date: '12 Jun 2021',
    sample:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    author: 'Debo Ajikede',
    category: 'Technology',
    caption: 'Cyber attack on virtual  farms : The 2021 report analysis',
  },
  {
    image: greenhouse,
    date: '12 Jun 2021',
    sample:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquid quidem delectus necessitatibus nesciunt in...',
    author: 'Debo Ajikede',
    category: 'Farming',
    caption: 'Seven key roles in financial funding in farms',
  },
];

function LabCorner() {
  return (
    <Box bg="white" py="80px">
      <Container maxW="container.xl" px={8}>
        <HStack justify="space-between" pb="2">
          <Heading
            className="qfont"
            position="relative"
            pl={0}
            as="h2"
            fontSize={['24px', '28px']}
            fontWeight=" 500"
            letterSpacing="0"
            lineHeight="1.4"
            mb="5"
            color="#e1e1e1"
          >
            <Box as="span" class="span">
              Lab Corner's Latest Articles{' '}
            </Box>
          </Heading>
          <Text
            display={['none', 'none', 'initial', 'initial']}
            as="p"
            color="#3eb900"
            font-weight="600"
            letter-spacing="0"
            white-space="nowrap"
            font-size="14px"
            p={0}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Explore More
              <Box as="span" height="fit-content">
                <BsArrowRight />
              </Box>
            </Link>
          </Text>
        </HStack>

        <Stack
          spacing="40px"
          justify="center"
          align="center"
          direction={['column', 'column', 'column', 'row']}
        >
          {posts.map((post, index) => {
            return (
              <Box
                as="div"
                key={index}
                // shadow="lg"
                borderTopLeftRadius="10px"
                borderTopRightRadius="10px"
                width="100%"
              >
                <Box
                  width="100%"
                  minHeight="180px"
                  height="180px"
                  maxHeight="180px"
                  zIndex="2"
                  rounded="0"
                  mb={4}
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Image
                      borderTopRightRadius="10px"
                      borderTopLeftRadius="10px"
                      margin="auto"
                      src={post.image}
                      alt="some good alt text"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Link>
                </Box>

                <Stack>
                  <Flex justify="space-between" pr={6}>
                    <AuthorCategory
                      category={post.category}
                      author={post.author}
                    />
                    <Text
                      as={'p'}
                      className="qfont"
                      fontSize="12px"
                      color="textDark.100"
                    >
                      {post.date}
                    </Text>
                  </Flex>

                  <Box py={3}>
                    <Heading
                      className="qfont"
                      fontSize="24px !important"
                      lineHeight="1.4"
                    >
                      <Link
                        className="afont"
                        textDecoration="none"
                        fontWeight="600 "
                        _hover={{ textDecoration: 'none' }}
                      >
                        {post.caption}
                      </Link>
                    </Heading>
                    <Text as="p" color="textDark" py={'10px'}>
                      {post.sample}
                    </Text>
                    {/* <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      color="secondary.100"
                      fontWeight="normal"
                      className="qfont"
                    >
                      Read more
                    </Link> */}
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Stack>
        <Stack alignItems="flex-end" pb="2" pt={10}>
          <Text
            display={['initial', 'initial', 'none', 'none']}
            as="p"
            color="#3eb900"
            font-weight="600"
            letter-spacing="0"
            white-space="nowrap"
            font-size="14px"
            p={0}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Explore More
              <Box as="span" height="fit-content">
                <BsArrowRight />
              </Box>
            </Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

export default LabCorner;

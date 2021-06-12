import { Divider, Flex, Stack, Text, Container } from '@chakra-ui/layout';
import React from 'react';
import greenhouse from '../../assets/blog/greenhouse.jpeg';
import cows from '../../assets/blog/cows.jpg';
import holdleaf from '../../assets/blog/holdleaf.jpg';
import { AuthorCategory } from './LatestArticle';
import { Image, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const posts = [
  {
    image: greenhouse,
    author: 'Debo Ajikede',
    category: 'Farming',
    caption: 'Seven key roles in financial funding in farms',
  },
  {
    image: cows,
    author: 'Debo Ajikede',
    category: 'Technology',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    image: holdleaf,
    author: 'Debo Ajikede',
    category: 'Technology',
    caption: 'Cyber attack on virtual  farms : The 2021 report analysis',
  },
];

const popular = [
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
  {
    date: '11/07/2020',
    caption: 'Filling system for agricultural exports and its advantages',
  },
];

export const PopularPosts = ({ popular, ...rest }) => {
  return (
    <Stack
      {...rest}
      boxShadow="md"
      bg="white"
      p="30px"
      spacing="20px"
      mt={['40px', '40px', '0', '0']}
      ml={[0, 0, '30px', '30px']}
      height="fit-content"
    >
      <Heading
        as="h5"
        fontSize="23px"
        className="qfont"
        color="textDarkest.100"
      >
        Popular
      </Heading>
      {popular.map((p, i) => {
        if (popular.indexOf(p) === popular.length - 1) {
          return (
            <Link>
              <Link
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Stack spacing="10px">
                  <Text as="p" color="textDarker.100">
                    {p.caption}
                  </Text>
                  <Text as={'p'} color="textDark.100">
                    {p.date}
                  </Text>
                </Stack>
                <Box as="span" fontSize="20px" pt="5px" color="textDarker.100">
                  <BsArrowRight />
                </Box>
              </Link>
            </Link>
          );
        } else {
          return (
            <>
              <Link
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Stack spacing="10px">
                  <Text as="p" color="textDarker.100">
                    {p.caption}
                  </Text>
                  <Text as={'p'} color="textDark.100">
                    {p.date}
                  </Text>
                </Stack>
                <Box as="span" fontSize="20px" pt="5px" color="textDarker.100">
                  <BsArrowRight />
                </Box>
              </Link>
              <Divider w="80%" m="auto" />
            </>
          );
        }
      })}
    </Stack>
  );
};

function FeaturedPosts() {
  return (
    <Container maxW="container.xl" px={8}>
      <Flex
        minHeight="80vh"
        pb="100px"
        flexDirection={['column', 'column', 'row', 'row']}
      >
        <Stack spacing="40px" pt="40px">
          {posts.map((post, index) => {
            return (
              <Flex key={index}>
                <Flex>
                  <Box
                    minWidth={['100px', '170px']}
                    maxWidth={['100px', '170px']}
                    mr={['10px', '30px']}
                    minHeight="130px"
                    maxHeight="140px"
                    zIndex="2"
                    rounded="0"
                  >
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Image
                        borderRadius="5px"
                        margin="auto"
                        src={post.image}
                        alt="some good alt text"
                        objectFit={['cover', 'cover']}
                        width="100%"
                        height="100%"
                      />
                    </Link>
                  </Box>
                  <Stack>
                    <AuthorCategory
                      category={post.category}
                      author={post.author}
                    />
                    <Heading
                      className="qfont"
                      fontSize={['20px', '20px', '24px', '28px']}
                    >
                      <Link
                        className="afont"
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                      >
                        {post.caption}
                      </Link>
                    </Heading>
                  </Stack>
                </Flex>
              </Flex>
            );
          })}
        </Stack>
        <PopularPosts popular={popular} />
      </Flex>
    </Container>
  );
}

export default FeaturedPosts;

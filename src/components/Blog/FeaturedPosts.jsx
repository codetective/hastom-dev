import { Divider, Flex, Stack, Text, Container } from '@chakra-ui/layout';
import React from 'react';

import { AuthorCategory } from './LatestArticle';
import { Image, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

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

function FeaturedPosts({ articles }) {
  return (
    <Container maxW="container.xl" px={8}>
      <Flex
        minHeight="80vh"
        pb="80px"
        flexDirection={['column', 'column', 'row', 'row']}
      >
        <Stack spacing="40px" pt="40px">
          {articles.map((post, index) => {
            return (
              <Flex key={index}>
                <Flex>
                  <Box
                    minWidth={['100px', '200px']}
                    maxWidth={['100px', '200px']}
                    display={['none', 'none', 'none', 'block']}
                    mr={['10px', '25px']}
                    minHeight="130px"
                    maxHeight="140px"
                    zIndex="2"
                    rounded="0"
                  >
                    <Link
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                      to={`/blog/${post.category.category}/${post.uuid}`}
                    >
                      <Image
                        borderRadius="3px"
                        margin="auto"
                        src={post.images[0].location}
                        alt={post.title}
                        objectFit={['cover', 'cover']}
                        width="100%"
                        height="100%"
                        display={['none', 'block']}
                      />
                    </Link>
                  </Box>

                  <Stack>
                    <AuthorCategory
                      category={post.category}
                      author={post.author}
                    />
                    <Heading
                      // className="qfont"
                      lineHeight="1.5"
                      fontSize={[
                        '20px',
                        '20px',
                        '20px !important',
                        '24px !important',
                      ]}
                      fontWeight="500"
                    >
                      <Link
                        className="afont"
                        textDecoration="none"
                        to={`/blog/${post.category.category}/${post.uuid}`}
                        _hover={{ textDecoration: 'none' }}
                      >
                        {post.title}
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

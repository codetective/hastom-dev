import React from 'react';
import {
  Container,
  Box,
  Text,
  Stack,
  Heading,
  Image,
  Link as PostLink,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';

import { AuthorCategory } from './LatestArticle';
import { Link } from 'react-router-dom';

function FeatureCard({ post, loadingCategoryPosts }) {
  return (
    <Box
      as="div"
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
        as={Link}
        to={`/blog/${post.category.category}/${post.uuid}`}
      >
        <Image
          borderTopRightRadius="10px"
          borderTopLeftRadius="10px"
          margin="auto"
          src={post.images[0].location}
          alt={post.title}
          objectFit="contain"
          width="100%"
          // height="100%"
        />
      </Box>

      <Stack pt="5">
        <Flex justify="space-between" pr={6}>
          <AuthorCategory category={post.category} author={post.author} />
          <Text as={'p'} className="qfont" fontSize="12px" color="textDark.100">
            {post.date}
          </Text>
        </Flex>

        <Box py={3}>
          <Heading
            className="qfont"
            fontSize="24px !important"
            lineHeight="1.4"
            mb="3"
          >
            <PostLink
              as={Link}
              to={`/blog/${post.category.category}/${post.uuid}`}
              className="afont"
              textDecoration="none"
              fontWeight="500"
              _hover={{ textDecoration: 'none' }}
            >
              {post.title}
            </PostLink>
          </Heading>
          <Box
            id="conntent-box"
            color="textDark.100"
            height="90px"
            overflowY="hidden"
            className="line-clamp"
          >
            <Box
              dangerouslySetInnerHTML={{
                // __html: convertContentFromJSONToHTML(post.content),
                __html: JSON.parse(post.content).blocks[0].text
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

function FeaturedCards({ posts, ...rest }) {
  return (
    <Box bg="white" pt="80px" {...rest}>
      <Container maxW="container.xl" px={8}>
        <SimpleGrid spacing="40px" columns={[1, 1, 2, 3]}>
          {posts &&
            posts.map((post, index) => {
              return <FeatureCard post={post} key={index} />;
            })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default FeaturedCards;

import React from 'react';
import {
  Box,
  Heading,
  Link as PostLink,
  Image,
  Text,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
import bloghead from '../../../assets/bloghead.jpg';
import { stateToHTML } from 'draft-js-export-html';
import { convertFromRaw } from 'draft-js';
import { Link } from 'react-router-dom';

function convertContentFromJSONToHTML(text) {
  // let blocks = JSON.parse(text);
  return stateToHTML(convertFromRaw(text));
}

const AuthorCategory = props => {
  return (
    <Box id="author-category" className="qfont" pl={6}>
      <Text
        as={Link}
        to={`/blog/${props.category.uuid}`}
        // as="small"
        fontWeight="normal"
        fontSize="14px"
        color="primary.100"
        textTransform="capitalize"
        textDecoration="none"
        _hover={{ textDecoration: 'none' }}
      >
        {props.category.category || 'EMPTY'}
      </Text>
      <Text as="p" color="textDark.100" fontSize="14px">
        By {props.author.name}
      </Text>
    </Box>
  );
};

const LatestArticle = ({ loadingCategoryPosts, latestPost }) => {
  return (
    <Container maxW="container.xl" px={8} pb="4">
      <SimpleGrid
        columns={[1, 1, 2]}
        spacing={['40px', '40px', '60px']}
        pt={10}
        // display="flex"
        // flexDirection={{ base: 'column', md: 'row' }}
        // justifyContent="space-between"
        // alignItems="flex-start"
      >
        <Box
          display="flex"
          flex="1"
          mb={5}
          mr="25px"
          position="relative"
          alignItems="center"
          w="100%"
          as={Link}
          to={`/blog/${latestPost.category.category}/${latestPost.uuid}`}
        >
          <Image
            margin="auto"
            borderRadius="lg"
            src={latestPost.images[0].location || bloghead}
            alt={latestPost.title}
            objectFit={'contain'}
            // width="100%"
            maxW="100%"
            height="100%"
          />
        </Box>

        <Box
          flex="1.2"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <AuthorCategory
            category={latestPost.category}
            author={latestPost.author}
          />

          <Heading
            marginTop="1"
            className="qfont"
            py={1}
            fontSize={['32px !important', '40px !important']}
          >
            <PostLink
              as={Link}
              className="afont"
              textDecoration="none"
              fontWeight="bold !important"
              _hover={{ textDecoration: 'none' }}
              to={`/blog/${latestPost.category.category}/${latestPost.uuid}`}
            >
              {latestPost.title}
            </PostLink>
          </Heading>

          <Box
            display={['block', 'block', 'block', 'block']}
            id="conntent-box"
            color="textDark.100"
            py={'15px'}
            height="150px"
            className="line-clamp"
          >
            <Box
              dangerouslySetInnerHTML={{
                __html: convertContentFromJSONToHTML(latestPost.content),
              }}
            />
          </Box>

          <PostLink
            display={['block', 'block', 'block', 'block']}
            py="2"
            as={Link}
            textDecoration="none"
            _hover={{ textDecoration: 'none' }}
            color="#f8b458"
            fontWeight="bold"
            className="qfont"
            to={`/blog/${latestPost.category.category}/${latestPost.uuid}`}
          >
            Read more
          </PostLink>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default LatestArticle;
export { AuthorCategory, convertContentFromJSONToHTML };

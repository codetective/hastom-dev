import { Image } from '@chakra-ui/image';
import {
  Box,
  Circle,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import {
  AuthorCategory,
  convertContentFromJSONToHTML,
} from '../components/Blog/LatestArticle';
import LabCorner from '../components/Home/LabCorner';
import { PopularPosts } from '../components/Blog/FeaturedPosts';

import { IoIosShareAlt } from 'react-icons/io';
import { FaCheck, FaCopy } from 'react-icons/fa';
import facebook from '../assets/social_icons/facebook.png';
import whatsapp from '../assets/social_icons/whatsapp.png';
import pinterest from '../assets/social_icons/pinterest.png';
import twitter from '../assets/social_icons/twitter.png';
import linkedin from '../assets/social_icons/linkedin.png';
import { useParams } from 'react-router-dom';
import baseURL from '../helpers/config';
import axios from 'axios';
import SkeletonLoaderBlog from '../components/Blog/SkeletonLoaderBlog';
import ErrorAlert from '../components/Global/ErrorAlert';
import { useClipboard } from '@chakra-ui/react';
import HelmetForSEO from '../helpers/HelmetForSEO';
import { useGenCtx } from '../context/GeneralContext';

function BlogRead() {
  let { article } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { hasCopied, onCopy } = useClipboard(window.location);
  const { articles } = useGenCtx();

  const FetchArticle = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const dt = await axios.get(baseURL + '/article/' + article);
      const { data } = dt.data;
      if (data.error) {
        setError(true);
        setLoading(false);
      } else {
        setData(data);
        console.log(data);
        document.title = data.title;
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchArticle();
    //eslint-disable-next-line
  }, [article]);

  return (
    <>
      {loading && !error && <SkeletonLoaderBlog />}
      {!loading && error && (
        <ErrorAlert
          title="Something went wrong!"
          type="error"
          message={error.message || 'A network error may have occured'}
          retryFunc={() => window.location.reload()}
        />
      )}

      {data !== null && !loading && (
        <>
          <HelmetForSEO
            title={data.title}
            image={data.image}
            description={
              convertContentFromJSONToHTML(data.content).slice(3, 60) + '...'
            }
          />
          <Box bg="white">
            <Container maxW="container.xl" px={8}>
              <Stack
                direction={['column', 'column', 'row', 'row']}
                pt="40px"
                spacing="40px"
                justify="space-between"
              >
                <VStack
                  spacing="15px"
                  align="flex-start"
                  width={['100%', '100%', '60%', '60%']}
                  borderBottom="3px solid"
                  borderBottomColor="gray.100"
                >
                  <AuthorCategory
                    author={data.author}
                    category={data.category}
                  />
                  <Heading
                    className="afont"
                    color="textDarker.100"
                    fontWeight="500"
                    py={4}
                    fontSize={['24px', '24px', '28px', '28px']}
                  >
                    {data.title}
                  </Heading>
                  <Box width={{ base: '100%', sm: '100%' }}>
                    <Image
                      margin="auto"
                      borderRadius="lg"
                      src={data.images[0].location}
                      alt={data.title}
                      objectFit="contain"
                      width="100%"
                      height="500px"
                    />
                  </Box>

                  <Box
                    borderBottom="3px solid"
                    width="100%"
                    borderBottomColor="primary.100"
                  >
                    {new Date(data.create_at).toLocaleDateString()}
                    <Text color="primary.100"></Text>
                  </Box>
                  <Box
                    className="blog-content-box"
                    dangerouslySetInnerHTML={{
                      __html: convertContentFromJSONToHTML(data.content),
                    }}
                  />
                  {/* end of article body */}

                  <HStack
                    align="center"
                    borderTop="3px solid"
                    width="100%"
                    py="20px"
                    borderTopColor="primary.100"
                    spacing="10px"
                  >
                    <Text
                      fontWeight="600"
                      color="textDarker.100"
                      className="afont"
                    >
                      Share
                    </Text>
                    <Box as="span" fontSize="30px">
                      <IoIosShareAlt />
                    </Box>
                    <Box
                      as="a"
                      target="_blank"
                      href={
                        'https://www.facebook.com/sharer.php?u=' +
                        window.location
                      }
                      transition="all .3s ease"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      width="30px"
                      height="30px"
                      cursor="pointer"
                    >
                      <Image src={facebook} width="100%" />
                    </Box>

                    <Box
                      as="a"
                      target="_blank"
                      href={
                        'https://www.linkedin.com/sharing/share-offsite/?url=' +
                        window.location
                      }
                      transition="all .3s ease"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      width="30px"
                      height="30px"
                      cursor="pointer"
                    >
                      <Image src={linkedin} width="100%" />
                    </Box>

                    <Box
                      as={'a'}
                      target="_blank"
                      href={
                        'https://twitter.com/intent/tweet?url=' +
                        window.location
                      }
                      transition="all .3s ease"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      width="30px"
                      height="30px"
                      rel="noopener"
                      cursor="pointer"
                    >
                      <Image src={twitter} width="100%" />
                    </Box>

                    <Box
                      as="a"
                      target="_blank"
                      href={
                        'https://www.pinterest.com/pin/create/button/?url=' +
                        window.location
                      }
                      transition="all .3s ease"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      width="30px"
                      height="30px"
                      cursor="pointer"
                    >
                      <Image src={pinterest} width="100%" />
                    </Box>

                    <Box
                      as="a"
                      target="_blank"
                      href={
                        'https://wa.me/?text=Hey there! Check out this amazing article on ' +
                        window.location
                      }
                      transition="all .3s ease"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      width="30px"
                      height="30px"
                      cursor="pointer"
                    >
                      <Image src={whatsapp} width="100%" />
                    </Box>
                    <Circle
                      onClick={onCopy}
                      transition="all .5s ease"
                      _hover={{
                        transform: 'scale(1.3)',
                      }}
                      size="30px"
                      bg={hasCopied ? 'green.500' : 'secondary.100'}
                      color="white"
                      cursor="pointer"
                    >
                      {hasCopied ? <FaCheck /> : <FaCopy />}
                    </Circle>
                  </HStack>
                </VStack>
              </Stack>
            </Container>
            <LabCorner />
          </Box>
        </>
      )}
    </>
  );
}

export default BlogRead;

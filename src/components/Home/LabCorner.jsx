import React from 'react';
import {
  Container,
  Box,
  Text,
  HStack,
  Stack,
  Heading,
  Link,
} from '@chakra-ui/react';

import { BsArrowRight } from 'react-icons/bs';
import FeaturedCards from '../Blog/FeaturedCards';
import { useGenCtx } from '../../context/GeneralContext';
import { shuffleArray } from '../../helpers';

function LabCorner() {
  const { articles, errorArticles, loadingArticles } = useGenCtx();

  return (
    <>
      {!loadingArticles && !errorArticles && (
        <Box bg="white" py="80px">
          <Container maxW="container.xl" px={8}>
            <HStack justify="space-between">
              <Heading
                className="qfont"
                position="relative"
                pl={0}
                as="h2"
                fontSize={['24px', '28px']}
                fontWeight=" 500"
                letterSpacing="0"
                lineHeight="1.4"
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
                fontWeight="600"
                letterSpacing="0"
                whiteSpace="nowrap"
                fontSize="14px"
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
          </Container>

          <FeaturedCards posts={shuffleArray(articles).slice(1, 4)} pt="3" />
          <Container maxW="container.xl" px={8}>
            <Stack alignItems="flex-end" pb="2" pt={10}>
              <Text
                display={['initial', 'initial', 'none', 'none']}
                as="p"
                color="#3eb900"
                fontWeight="600"
                letterSpacing="0"
                whiteSpace="nowrap"
                fontSize="14px"
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
      )}
    </>
  );
}

export default LabCorner;

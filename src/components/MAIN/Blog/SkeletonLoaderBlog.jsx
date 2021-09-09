import {
  Box,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Container,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

function SkeletonLoaderBlog() {
  return (
    <Box bg="white" pt="80px">
      <Container maxW="container.xl" px={8}>
        <Stack spacing="40px">
          <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px">
            <Skeleton width="100%" height="300px" />
            <Box>
              <Box mb="3">
                <Skeleton height="50px" w="50%" />
              </Box>
              <Box>
                <Skeleton height="25px" mb="3" />
                <Skeleton height="25px" mb="3" />
                <Skeleton height="25px" w="80%" />
              </Box>
              <SkeletonText noOfLines="5" mt="4" />
            </Box>
          </SimpleGrid>

          <SimpleGrid spacing="40px" columns={[1, 1, 2, 3]}>
            <Skeleton width="100%" height="400px" />
            <Skeleton width="100%" height="400px" />
            <Skeleton width="100%" height="400px" />
            <Skeleton width="100%" height="400px" />
            <Skeleton width="100%" height="400px" />
            <Skeleton width="100%" height="400px" />
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

export default SkeletonLoaderBlog;

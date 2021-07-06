import React from 'react';
import {
  Box,
  Container,
  Text,
  Heading,
  Image,
  Stack,
  HStack,
} from '@chakra-ui/react';

function RanchDesc({ p }) {
  return (
    <Box id="ranchdesc" bg="white" position="relative" width="100vw" py="80px">
      <Container maxW="container.xl" px={8}>
        <Stack
          direction={['column', 'column', 'row-reverse', 'row-reverse']}
          spacing="40px"
        >
          <HStack
            height="375px"
            alignItems="baseline"
            justifyContent="center"
            w={['100%', '100%', '50%', '50%']}
          >
            <Box width="45%" h="280px" rounded="lg">
              <Image
                margin="auto"
                borderRadius="lg"
                src={'https://source.unsplash.com/600x600/?' + p.image}
                alt="some good alt text"
                objectFit={['cover', 'cover']}
                width="100%"
                h="100%"
              />
            </Box>
            <Box width="45%" h="250px" rounded="lg">
              <Image
                margin="auto"
                borderRadius="lg"
                src={'https://source.unsplash.com/featured/600x600/?' + p.image}
                alt="some good alt text"
                objectFit={['cover', 'cover']}
                width="100%"
                h="100%"
                mt="100px"
                ml="-25px"
              />
            </Box>
          </HStack>
          <Stack flexDir="column" pr="1" w={['100%', '100%', '50%', '60%']}>
            <Heading
              className="qfont"
              as="h2"
              fontSize={['24px', '28px']}
              fontWeight=" 500"
              letterSpacing="0"
              lineHeight="1.4"
              p={0}
              textTransform="capitalize"
            >
              <Box as="span" class="span">
                {p.shortTitle}
              </Box>
            </Heading>
            {p.details.map((d, i) => {
              return (
                <Text as="p" pt="3" key={i}>
                  {d}
                </Text>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default RanchDesc;

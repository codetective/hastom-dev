import { Box, Button, Stack, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../assets/header/header.jpg';

export default function BottomCTA() {
  return (
    <Box
      py="100px"
      bgImage={header}
      bgPos="center"
      bgSize="cover"
      bgColor="blackAlpha.500"
      bgBlendMode="overlay"
    >
      <Container maxW="xl">
        <Stack alignItems="center" spacing="40px">
          <Heading
            className="qfont"
            as="h2"
            fontSize={['24px', '28px']}
            fontWeight=" 500"
            letterSpacing="0"
            lineHeight="1.4"
            p={0}
            textAlign="center"
            color="white"
          >
            <Box as="span" class="span">
              Invest with Hastom today <br /> with a bold step you can <br /> do
              everything easily
            </Box>
          </Heading>
          <Box>
            <Link to="/login">
              <Button
                size="sm"
                rounded="34px"
                color="white"
                bg="primary.100"
                px={'40px'}
                _hover={{
                  bg: ['secondary.100'],
                }}
              >
                Get Started
              </Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

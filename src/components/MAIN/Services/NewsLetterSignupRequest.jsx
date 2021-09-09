import {
  FormControl,
  InputGroup,
  Container,
  Center,
  Input,
  Box,
  Stack,
  Heading,
  Button,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function NewsLetterSignupRequest() {
  return (
    <Box py="140px" bg="white">
      <Container maxW="container.xl" px={8}>
        <Center flexDirection="column">
          <Stack spacing="40px">
            <Heading
              className="qfont"
              as="h2"
              fontSize={['24px', '28px']}
              fontWeight=" 500"
              letterSpacing="0"
              lineHeight="1.4"
              p={0}
              textAlign="center"
            >
              <Box as="span" class="span">
                Sign up to our newsletter <br /> to stay up to date on more
                details.
              </Box>
            </Heading>

            <Stack
              direction={{ base: 'column', md: 'row' }}
              as={'form'}
              spacing={{ base: '40px', md: '12px' }}
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <FormControl id="email">
                <InputGroup>
                  <InputLeftElement
                    pt="2"
                    pl="5"
                    pointerEvents="none"
                    children={
                      <Icon
                        as={FaEnvelope}
                        fontSize="26px"
                        color="primary.100"
                      />
                    }
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    py="4"
                    required
                    pl="50px"
                    size="lg"
                    rounded="full"
                    bg="gray.100"
                  />
                </InputGroup>
              </FormControl>
              <FormControl w={{ base: '100%', md: '40%' }}>
                <Button
                  display="block"
                  m="auto"
                  size="lg"
                  rounded="34px"
                  type="submit"
                  color="white"
                  bg="primary.100"
                  px={'40px'}
                  _hover={{
                    bg: ['secondary.100'],
                  }}
                >
                  Subscribe
                </Button>{' '}
              </FormControl>
            </Stack>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}

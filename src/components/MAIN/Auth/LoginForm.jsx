import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  Box,
  InputGroup,
  InputLeftElement,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { Link } from 'react-router-dom';
export default function LoginForm() {
  return (
    <Stack spacing={4} w={'80%'} maxW={'md'} height="100%" justify="center">
      <form>
        <Stack spacing="25px">
          <Heading
            className="qfont"
            as="h2"
            fontSize={['24px', '28px']}
            fontWeight=" 500"
            letterSpacing="0"
            lineHeight="1.4"
            textAlign="center"
            p={0}
            textTransform="capitalize"
          >
            <Box as="span" class="span">
              Login
            </Box>
          </Heading>

          {/* email box */}
          <FormControl id="email">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={FaUserCircle} fontSize="24px" color="primary.100" />
                }
              />
              <Input
                type="email"
                placeholder="Email"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
              />
            </InputGroup>
          </FormControl>

          {/* password */}
          <FormControl id="password">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={IoMdLock} fontSize="24px" color="secondary.100" />
                }
              />
              <Input
                type="password"
                placeholder="Password"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
              />
            </InputGroup>
          </FormControl>
          <Button
            size="md"
            rounded="34px"
            type="submit"
            color="white"
            bg="primary.100"
            px={'40px'}
            _hover={{
              bg: ['secondary.100'],
            }}
          >
            Login
          </Button>
          <Text textAlign="center" color="black">
            Don't have an account?
            <Box
              pl="1"
              as={Link}
              to="/register"
              textDecoration="underline"
              color="secondary.100"
            >
              Register
            </Box>
          </Text>
        </Stack>
      </form>
    </Stack>
  );
}

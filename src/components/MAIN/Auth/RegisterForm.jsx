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
  HStack,
} from '@chakra-ui/react';
import { FaUserCircle, FaPhoneAlt, FaFlag } from 'react-icons/fa';
import { IoMdLock } from 'react-icons/io';
import { MdContacts, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function RegisterForm() {
  return (
    <Stack spacing={4} w={'80%'} maxW={'md'} height="100%" justify="center">
      <form>
        <Stack spacing="23px">
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
              Register
            </Box>
          </Heading>

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

          {/* namebox */}
          <FormControl id="name">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={MdContacts} fontSize="24px" color="primary.100" />
                }
              />
              <Input
                type="text"
                placeholder="Full Legal Name"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
              />
            </InputGroup>
          </FormControl>

          {/* phone number */}
          <FormControl id="phone">
            <InputGroup>
              <InputLeftElement
                pl="2"
                pointerEvents="none"
                children={
                  <Icon as={FaPhoneAlt} fontSize="24px" color="primary.100" />
                }
              />
              <Input
                type="number"
                placeholder="Phone Number"
                py="4"
                pl="45px"
                rounded="full"
                bg="white"
              />
            </InputGroup>
          </FormControl>

          <HStack>
            {/* state */}
            <FormControl id="state">
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  pointerEvents="none"
                  children={
                    <Icon
                      as={MdLocationOn}
                      fontSize="24px"
                      color="primary.100"
                    />
                  }
                />
                <Input
                  type="text"
                  placeholder="State"
                  py="4"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>

            {/* Country */}
            <FormControl id="country">
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  pointerEvents="none"
                  children={
                    <Icon as={FaFlag} fontSize="24px" color="primary.100" />
                  }
                />
                <Input
                  type="text"
                  placeholder="Country"
                  py="4"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>
          </HStack>

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

          {/* submit btn */}
          <Button
            size="md"
            rounded="34px"
            color="white"
            bg="primary.100"
            px={'40px'}
            _hover={{
              bg: ['secondary.100'],
            }}
          >
            Login
          </Button>

          {/* helper text */}
          <Text textAlign="center" color="black">
            Already have an account?
            <Box
              pl="1"
              as={Link}
              to="/login"
              textDecoration="underline"
              color="secondary.100"
            >
              Sign in
            </Box>
          </Text>
        </Stack>
      </form>
    </Stack>
  );
}

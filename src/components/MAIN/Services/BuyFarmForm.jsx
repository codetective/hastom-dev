import {
  Box,
  Button,
  FormControl,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  ScaleFade,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
  FaTape,
} from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
// using import

export default function BuyFarmForm() {
  return (
    <ScaleFade in initialScale="0.9">
      <Stack
        bg={'white'}
        rounded={'xl'}
        p={{ base: 4, sm: 6, md: 8 }}
        spacing={{ base: 8 }}
        justify="center"
        maxW="600px"
        m="auto"
      >
        <Stack spacing={4} w="100%" textAlign="center">
          <Heading
            className="afont"
            color={'textDark.100'}
            lineHeight={1.1}
            fontSize={{ base: '1xl', sm: '1xl', md: '2xl' }}
          >
            {' '}
            Fill this form if you want to own a farm. Our Team will contact you
            shortly.
          </Heading>
          Phone Number Location of land - State, Area Images Land unit in
          acres/square meters Title documents available
        </Stack>
        <Box as={'form'} mt={10}>
          <Stack spacing={5}>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  py="6"
                  pointerEvents="none"
                  children={
                    <Icon as={MdContacts} fontSize="24px" color="primary.100" />
                  }
                />
                <Input
                  type="text"
                  placeholder="Full Name"
                  py="6"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>
            {/* email */}
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  py="6"
                  pointerEvents="none"
                  children={
                    <Icon as={FaEnvelope} fontSize="24px" color="primary.100" />
                  }
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  py="6"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>

            {/* phone number */}
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  py="6"
                  pointerEvents="none"
                  children={
                    <Icon as={FaPhoneAlt} fontSize="24px" color="primary.100" />
                  }
                />
                <Input
                  type="number"
                  placeholder="Phone Number"
                  py="6"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>
            {/* location */}
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  py="6"
                  pointerEvents="none"
                  children={
                    <Icon
                      as={FaLocationArrow}
                      fontSize="24px"
                      color="primary.100"
                    />
                  }
                />
                <Input
                  type="text"
                  placeholder="Location : State and Area"
                  py="6"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>
            {/* measurement */}
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pl="2"
                  py="6"
                  pointerEvents="none"
                  children={
                    <Icon as={FaTape} fontSize="24px" color="primary.100" />
                  }
                />
                <Input
                  type="text"
                  placeholder="Land unit in acres/square meters
                "
                  py="6"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>
            <Button
              size="md"
              rounded="34px"
              color="white"
              bg="primary.100"
              px={'40px'}
              _hover={{
                bg: ['secondary.100'],
              }}
              w="full"
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </ScaleFade>
  );
}

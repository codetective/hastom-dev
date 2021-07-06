import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  FormControl,
  InputGroup,
  InputLeftElement,
  Icon,
  Textarea,
} from '@chakra-ui/react';
import { MdContacts } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <Container maxW="container.xl" px={8} py={'40px'}>
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
            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
          >
            Send us a message
            <Text as={'span'} bg="secondary.100" bgClip="text">
              !
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quas
            distinctio beatae doloremque debitis, est dolor doloribus sunt.
          </Text>
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
                    <Icon
                      as={FaUserCircle}
                      fontSize="24px"
                      color="primary.100"
                    />
                  }
                />
                <Input
                  type="email"
                  placeholder="Email"
                  py="6"
                  pl="45px"
                  rounded="full"
                  bg="white"
                />
              </InputGroup>
            </FormControl>
            {/* message box */}
            <Textarea placeholder="Write Your Message" />
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
    </Container>
  );
}

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
  Flex,
} from '@chakra-ui/react';
import { MdContacts, MdLocationOn } from 'react-icons/md';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

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
            Please contact us using this form if you have any questions or
            comments about Hastom.
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

        <Box w="full" minH="500px" pt="80px">
          <Heading
            className="afont"
            color={'textDark.100'}
            lineHeight={1.1}
            fontSize="20px"
          >
            You can Find us at:
          </Heading>
          <Stack py="5">
            <Box>
              <Flex alignItems="center">
                <Box as="span" color="secondary.100" pr="2">
                  <MdLocationOn />
                </Box>
                <Text color="secondary.100" fontWeight="bold">
                  Address
                </Text>
              </Flex>
              <Text color="textDark.100" as="p">
                Hastom Cashew Center, Adebayo Alata.
              </Text>
              <Text as="p">Industrial Layout, Ogbomoso, Oyo State.</Text>
            </Box>
            <Box>
              <Flex alignItems="center">
                <Box as="span" color="secondary.100" pr="2">
                  <FaPhoneAlt />
                </Box>
                <Text color="secondary.100" fontWeight="bold">
                  Contact
                </Text>
              </Flex>
              <Text color="textDark.100" as="p">
                <a href="tel:+2348163013001">(+234) 8163013001</a>
              </Text>
              <Text color="textDark.100" as="p">
                <a href="mailto:hello@hastomnigeria.com">
                  hello@hastomnigeria.com
                </a>
              </Text>
            </Box>
          </Stack>
          <div class="gmap_canvas">
            <iframe
              width="100%"
              height="500px"
              title="Hastom Location"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Hastom%20Cashew%20Center,%20Adebayo%20Alata%20Industrial%20Layout,%20Ogbomoso,%20Oyo%20State.&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </Box>
      </Stack>
    </Container>
  );
}

import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/layout';
import React from 'react';
import { AiFillAppstore, AiFillCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cashew from '../../../../assets/header/nuts.jpg';

function FarmDetailBox({ name, capital, units, pack, id, image }) {
  return (
    <Stack
      spacing="40px"
      justifyContent="space-between"
      bg="white"
      pos="relative"
      top={[0, 0, '-30%', '-30%']}
      mx={['-8', '-8', 0, 0]}
    >
      <Box height="10px" bg="primary.100" pos="relative"></Box>
      <Stack spacing="20px" px="5">
        <Text
          color="textDarker.100"
          as="h1"
          fontSize={['24px', '23px']}
          fontWeight="bold"
          className="afont"
          textTransform="capitalize"
        >
          {name}
        </Text>

        {units !== 0 && (
          <>
            {' '}
            <Text as="small" color="gray.500" textTransform="uppercase">
              capital
            </Text>
            <Text
              color="textDarker.100"
              as="h1"
              fontSize={['24px', '23px']}
              fontWeight="bold"
              className="qfont"
              textTransform="capitalize"
            >
              {'$' + capital}
            </Text>
            <HStack justifyContent="space-between" className="qfont">
              <HStack spacing="10px">
                <Box as="span" color="green" fontSize="20px">
                  <AiFillAppstore />
                </Box>
                <Text color="textDarkest.100" fontWeight="bold">
                  Total units : {units}
                </Text>
              </HStack>
              <Text
                color="secondary.100"
                textTransform="uppercase"
                fontWeight="bold"
              >
                {pack} packs
              </Text>
            </HStack>
          </>
        )}
      </Stack>
      <Stack>
        {/* <Link to={'/dashboard/my-farms?product=' + id}> */}
        <Button
          w="full"
          rounded="0"
          className="afont"
          bg="primary.100"
          _hover={{
            bg: 'secondary.100',
          }}
          pl="30px"
          justifyContent="flex-start"
          color="white"
        >
          Add more units{' '}
        </Button>
        {/* </Link> */}
        <Button
          w="full"
          rounded="0"
          className="afont"
          _hover={{
            bg: 'primary.100',
            color: 'white',
          }}
          pl="30px"
          justifyContent="flex-start"
          color="textDarker.100"
          borderColor="primary.100"
          colorScheme="green"
          variant="outline"
        >
          Terms and conditions
        </Button>
        <Button
          display={['flex', 'flex', 'none', 'none']}
          position="relative"
          left="0"
          bottom="-25px"
          w="full"
          rounded="0"
          className="afont"
          _hover={{
            bg: 'primary.100',
            color: 'white',
          }}
          pl="30px"
          justifyContent="flex-start"
          color="textDarker.100"
          borderColor="primary.100"
          colorScheme="green"
          variant="flushed"
        >
          Select Pack
        </Button>
      </Stack>
    </Stack>
  );
}

function PackDetailsBox({ date, capital, units, year, id, index }) {
  return (
    <Stack
      spacing="20px"
      justifyContent="space-between"
      shadow="lg"
      bg="white"
      pos="relative"
      border="1px solid"
      borderColor="secondary.100"
      mt={[0, 0, index === 0 ? '40px' : 0, '40px']}
    >
      <Stack minHeight="50px" bg="gray.50" pos="relative" py="4" px="5">
        <HStack>
          <Text className="qfont" textTransform="uppercase">
            Pack{' '}
          </Text>
          <Text fontWeight="bold" className="qfont">
            {id}
          </Text>
        </HStack>
        <Divider color="primary.100" />
        <HStack justifyContent="space-between" className="qfont">
          <HStack spacing="10px">
            <Box as="span" color="secondary.100" fontSize="20px">
              <AiFillAppstore />
            </Box>

            <HStack>
              <Text color="textDarkest.100" className="qfont">
                Year :
              </Text>
              <Text color="textDarkest.100" className="afont">
                {year}
              </Text>
            </HStack>
          </HStack>
        </HStack>
        <HStack justifyContent="space-between" className="afont">
          <HStack spacing="10px">
            <Box as="span" fontSize="20px">
              <AiFillCalendar />
            </Box>
            <HStack>
              <Text color="textDarkest.100" className="qfont">
                Cycle Date :
              </Text>
              <Text color="textDarkest.100" className="afont">
                {date}
              </Text>
            </HStack>
          </HStack>
        </HStack>
      </Stack>

      {/* bootom part */}
      <Stack spacing="20px" px="5">
        <>
          {' '}
          <Text as="small" color="gray.500" textTransform="uppercase">
            capital
          </Text>
          <Text
            color="textDarker.100"
            as="h1"
            fontSize={['24px', '23px']}
            fontWeight="bold"
            className="qfont"
            textTransform="capitalize"
          >
            {'$' + capital}
          </Text>
          <HStack justifyContent="space-between" className="qfont">
            <HStack spacing="10px">
              <Box as="span" color="green" fontSize="20px">
                <AiFillAppstore />
              </Box>
              <Text color="textDarkest.100" fontWeight="bold">
                Units : {units}
              </Text>
            </HStack>
          </HStack>
        </>
      </Stack>
      <Stack>
        <Flex
          w="full"
          rounded="0"
          className="afont"
          bg="gray.100"
          p="4"
          justifyContent="flex-end"
          textDecoration="underline"
        >
          <Link to={'/dashboard/my-farms?pack=' + id}>View Reports</Link>
        </Flex>
      </Stack>
    </Stack>
  );
}

export default function CashewFarmsListing() {
  return (
    <Stack pb="40px">
      <Box
        h="20vh"
        filter="brightness(60%)"
        display={['none', 'none', 'block', 'block']}
      >
        <Image src={cashew} objectFit="cover" h="100%" w="100%" />
      </Box>
      <Container maxW="container.xl" px={8}>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
          <FarmDetailBox
            units="8"
            pack="3"
            name="Cashew Farms"
            capital="15,000"
          />

          <PackDetailsBox
            name="DB01"
            capital="3000"
            units="1"
            year="4"
            id="DB01"
            date="03 JUL 2021"
            index={0}
          />
          <PackDetailsBox
            index={1}
            name="DB02"
            capital="3500"
            units="2"
            year="3"
            date="03 JUL 2021"
            id="DB03"
          />
        </SimpleGrid>
      </Container>
    </Stack>
  );
}

import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/layout';
import React from 'react';
import useQuery from '../../../../helpers/useQuery';
import cashew from '../../../../assets/header/nuts.jpg';
import { AiFillAppstore, AiFillCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  FaChartLine,
  FaChartPie,
  FaDownload,
  FaFilePdf,
  FaRegChartBar,
} from 'react-icons/fa';
import OverviewBox from '../../Overview/OverviewBox';
import PackDetailsTable from './PackDetailsTable';

function PackDetailsBox({ date, year, id, index }) {
  return (
    <Box w={['100%', '100%', '40%', '30%']}>
      <Stack
        justifyContent="space-between"
        shadow="lg"
        bg="white"
        mx={['-8', '-8', 0, 0]}
        pos="relative"
        mt={[0, 0, '-80px', '-110px']}
      >
        <Stack
          borderTop="1px solid"
          borderLeft="1px solid"
          borderRight="1px solid"
          borderColor="secondary.100"
          minHeight="50px"
          bg="gray.50"
          pos="relative"
          py="4"
          px="5"
        >
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
            <Stack spacing="10px" direction={['row', 'row', 'column', 'row']}>
              <HStack>
                <Box as="span" fontSize="20px">
                  <AiFillCalendar />
                </Box>
                <Text color="textDarkest.100" as="small" className="qfont">
                  Cycle Date :
                </Text>
              </HStack>
              <Text color="textDarkest.100" as="small" className="afont">
                {date}
              </Text>
            </Stack>
          </HStack>
        </Stack>

        <Stack
          mt="0"
          style={{
            marginTop: '0px',
          }}
        >
          <Link to={'#'}>
            <HStack
              border="1px solid"
              borderColor="primary.100"
              w="full"
              rounded="0"
              className="afont"
              bg="white"
              p="5"
              justifyContent="space-between"
            >
              <HStack>
                <Box as="span" fontSize="20px">
                  <FaFilePdf />
                </Box>
                <Text fontSize={['initial', 'initial', 'small', 'initial']}>
                  Agreement License
                </Text>
              </HStack>
              <Box as="span" color="secondary.100" fontSize="20px">
                <FaDownload />
              </Box>
            </HStack>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

export default function PackDetailsPage() {
  const pack = useQuery().get('pack');

  return (
    <Stack pb="40px">
      <Box
        h="20vh"
        filter="brightness(60%)"
        display={['none', 'none', 'block', 'block']}
      >
        <Image src={cashew} objectFit="cover" h="100%" w="100%" />
      </Box>
      <Box
        style={{
          marginTop: 0,
        }}
      >
        <Container maxW="container.xl" px={8}>
          <Stack direction={['column', 'column', 'row', 'row']}>
            <PackDetailsBox year="4" id={pack} date="03 JUL 2021" />
            <Box
              w={['100%', '100%', '65%', '75%']}
              style={{
                margin: 0,
              }}
              h="fit-content"
            >
              <SimpleGrid
                columns={[1, 2, 2, 3]}
                spacing="30px"
                mx={['-8', '-8', 0, 0]}
                mr={[-8, -8, -8, -8]}
                bg="gray.200"
                px={8}
              >
                <OverviewBox
                  iconColor="green.600"
                  icon={<FaChartPie />}
                  title="capital invested"
                  value="$5900.00"
                  index={0}
                />
                <OverviewBox
                  iconColor="secondary.100"
                  icon={<FaRegChartBar />}
                  title="cost for this cycle"
                  value="$5900.00"
                  index={1}
                />
                <OverviewBox
                  iconColor="green.600"
                  icon={<FaChartLine />}
                  title="profit"
                  value="Yielding"
                  index={1}
                />
              </SimpleGrid>
            </Box>
          </Stack>
          <Stack>
            <PackDetailsTable />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

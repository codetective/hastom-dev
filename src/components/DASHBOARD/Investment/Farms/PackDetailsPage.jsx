import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Modal, Badge,
} from '@chakra-ui/layout';
import React from 'react';
import useQuery from '../../../../helpers/useQuery';
import cashew from '../../../../assets/header/nuts.jpg';
import { AiFillAppstore, AiFillCalendar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaChartLine,
  FaChartPie,
  FaDownload,
  FaFilePdf, FaLeaf,
  FaRegChartBar,
} from 'react-icons/fa';
import OverviewBox from '../../Overview/OverviewBox';
import PackDetailsTable from './PackDetailsTable';

function PackDetailsBox({ date, status, farm, quantity, id, }) {
  return (
      <Box w={['100%', '100%', '100%', '30%']}>
        <Stack
            spacing="20px"
            justifyContent="space-between"
            shadow="lg"
            bg="white"
            pos="relative"
            border="1px solid"
            borderColor="#efefef"
            top={["-32%", "-32%", '-80%', '-20%']}
            mx={['-8', '-8', "-8", 0]}
            ml={[-8, -8, -8, -8]}
        >
          <Stack minHeight="50px" bg="gray.50" pos="relative" py="4" px="5">
            {status !== "active" && (
                <Stack>
                  <Badge  colorScheme='red' shadow="lg" variant="solid" cozlor="red" py={1} px={3} textTransform={"capitalize"}>
                    {status}
                  </Badge>
                </Stack>
            )}

            {status === "active" && (
                <Stack>
                  <Badge  colorScheme='green' shadow="lg" variant="solid" cozlor="red" py={1} px={3} textTransform={"capitalize"}>
                    {status}
                  </Badge>
                </Stack>
            )}
            <HStack pt={2}>
              <Text className="qfont" textTransform="uppercase">
                Farm
              </Text>
              <Text fontWeight="bold" className="qfont">
                {' PC00'+ id}
              </Text>
            </HStack>
            <Divider color="primary.100" />
            <HStack justifyContent="space-between" className="qfont">
              <HStack spacing="10px">
                <Box as="span" color="secondary.100" fontSize="20px">
                  <FaLeaf />
                </Box>

                <HStack>
                  <Text color="textDarkest.100" className="qfont">
                    {farm}
                  </Text>

                </HStack>
              </HStack>
            </HStack>
            <HStack justifyContent="space-between" className="afont">
              <HStack spacing="10px">
                <Box as="span" fontSize="20px">
                  <FaCalendarAlt />
                </Box>
                <HStack>
                  <Text color="textDarkest.100" className="qfont">
                    Date :
                  </Text>
                  <Text color="textDarkest.100" className="afont">
                    {date}
                  </Text>
                </HStack>
              </HStack>
            </HStack>
          </Stack>

          <Stack spacing="20px" px="5" pb={5}>
            <>
              {' '}
              <HStack justifyContent="space-between" className="qfont">
                <HStack spacing="10px">
                  <Box as="span" color="green" fontSize="20px">
                    <AiFillAppstore />
                  </Box>
                  <Text color="textDarkest.100" fontWeight="bold">
                    Units : {quantity}
                  </Text>
                </HStack>
              </HStack>
            </>
          </Stack>
        </Stack>
      </Box>

  );
}


const PackDetailsPage= ({data}) => {

  return (
    <Stack pb="40px">
      <Box
        h="20vh"
        filter="brightness(60%)"
        display={['none', 'none', 'none', 'block']}
      >
        <Image src={cashew} objectFit="cover" h="100%" w="100%" />
      </Box>
      <Box
        style={{
          marginTop: 0,
        }}
      >
        <Container maxW="container.xl" px={8}>
          <Stack direction={['column', 'column', 'column', 'row']}>
            <PackDetailsBox
                date={new Date(data.date_created).toLocaleDateString([],
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                )}
                status={data.status}
                farm={data.item.label}
                quantity={data.quantity}
                id={data.id}
            />
            <Box
              w={['100%', '100%', '100%', '75%']}
              style={{
                margin: 0,
              }}
              h="fit-content"
            >
              <SimpleGrid
                columns={[1, 2, 2, 3]}
                spacing="30px"
                mx={['-8', '-8', "-8", 0]}
                mr={[-8, -8, -8, -8]}
                bg="gray.200"
                px={8}
                py={4}
              >
                <OverviewBox
                  iconColor="green.600"
                  icon={<FaChartPie />}
                  title="capital invested"
                  value={"N" + data.capital}
                  index={0}
                />

                <OverviewBox
                  iconColor="green.600"
                  icon={<FaChartLine />}
                  title="profit"
                  value={ "N" + data.profit ? "N" + data.profit :"0"}
                  index={1}
                />
                <OverviewBox
                    iconColor="secondary.100"
                    icon={<FaRegChartBar />}
                    title="Total Reports"
                    value={data.report.total}
                    index={1}
                />

              </SimpleGrid>
            </Box>


          </Stack>
          <Stack>
            <PackDetailsTable data={data.report} />
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

export default PackDetailsPage

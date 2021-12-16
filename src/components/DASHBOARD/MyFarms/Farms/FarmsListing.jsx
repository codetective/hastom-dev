
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
  Badge,
} from '@chakra-ui/layout';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import React, {useEffect} from 'react';
import {AiFillAppstore, AiFillCalendar,} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cashew from '../../../../assets/header/nuts.jpg';
import {FaCalendarAlt, FaDownload, FaEraser, FaFilePdf, FaLeaf, FaTractor, FaTree} from "react-icons/fa";
import ContentLoader from "../../../../helpers/ContentLoader";
import {getAllUserPacks } from '../../../../apiServices/packServices';
import PackDetailsPage from './PackDetailsPage';
import useQuery from "../../../../helpers/useQuery";
import {GiBonsaiTree, GiFarmTractor} from "react-icons/all";


export default function FarmsListing() {
  const [allPacks, setAllPacks] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [contentChanged, setContentChanged] = React.useState(0)
  const { isOpen: isReportOpen , onOpen: onReportOpen, onClose: onReportClose } = useDisclosure()

  const [viewReports, setViewReports] = React.useState({})

  const farmtype = useQuery().get('farmtype');


  const viewData = (item) => {
    setViewReports(item)
    onReportOpen()
  }


  useEffect(() => {
    const fetch = async() => {
      try{
        const res = await getAllUserPacks()
        setAllPacks(res.data.data)
        setIsLoading(false)
      }
      catch(err){
        console.log(err)
      }
    }
    fetch()
  }, [contentChanged])
  return (
      isLoading ?
          <ContentLoader />
          :
    <Stack pb="40px"  justifyContent="center" alignItems= "center">
      <HStack
          px={8}  pt="5" pb="3"
          background="white"
          bg="#F7FAFC"
          w="100%"
          borderTop="1px solid"
          borderColor="secondary.100"
          justifyContent="center"
      >
        <FaTractor color="green" fontSize="24"/>
        <Text as="h2" color="green" maxW="container.xl">{farmtype.toUpperCase()}</Text>
      </HStack>

      <Box
        h="20vh"
        w="100%"
        filter="brightness(60%)"
        display={['block', 'block', 'block', 'block']}
      >

        <Image src={cashew} objectFit="cover" h="100%" w="100%" />

      </Box>

      <Container maxW="container.xl" px={8} >
        <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">

          {allPacks.map(item => (
              <>
              {item.item.type.name.toLowerCase() === farmtype.toLowerCase() && (
              <Stack
                  spacing="20px"
                  justifyContent="space-between"
                  shadow="lg"
                  bg="white"
                  pos="relative"
                  border="1px solid"
                  borderColor="#efefef"
                  top={["0%", "0%", '0%', '-20%']}
              >
                <Stack minHeight="50px" bg="gray.50" pos="relative" py="4" px="5">
                  {item.status !== "active" && (
                      <Stack>
                        <Badge  colorScheme='red' shadow="lg" variant="solid" cozlor="red" py={1} px={3} textTransform={"capitalize"}>
                          {item.status}
                        </Badge>
                      </Stack>
                  )}

                  {item.status === "active" && (
                      <Stack>
                        <Badge  colorScheme='green' shadow="lg" variant="solid" cozlor="red" py={1} px={3} textTransform={"capitalize"}>
                          {item.status}
                        </Badge>
                      </Stack>
                  )}
                  <HStack pt={2}>
                    <Text className="qfont" textTransform="uppercase">
                      Farm
                    </Text>
                    <Text fontWeight="bold" className="qfont">
                      {' PC00'+ item.id}
                    </Text>
                  </HStack>
                  <Divider color="primary.100" />

                  <HStack justifyContent="space-between" className="qfont">
                    <HStack spacing="10px">
                      <Box as="span" color="secondary.100" fontSize="20px">
                        <FaLeaf />
                      </Box>

                      <HStack>
                        <Text textTransform="capitalize" color="textDarkest.100" className="qfont">
                          {item.item.label}
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
                          {new Date(item.date_created).toLocaleDateString([],
                                    {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    }
                                )}
                        </Text>
                      </HStack>
                    </HStack>
                  </HStack>
                </Stack>

                <Stack spacing="20px" px="5">
                  <>
                    {' '}
                    <HStack justifyContent="space-between" className="qfont">
                      <HStack spacing="10px">
                        <Box as="span" color="green" fontSize="20px">
                          <AiFillAppstore />
                        </Box>
                        <Text color="textDarkest.100" fontWeight="bold">
                          Units : {item.quantity}
                        </Text>
                      </HStack>
                    </HStack>
                    <Stack
                        flexWrap="wrap"
                    >
                      <Stack p bordder="solid 1px red">
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
                          {'N' + item.capital}
                        </Text>
                      </Stack>

                      <Stack pt={4} bordder="solid 1px red" color="green">
                        <Text as="small" color="green" textTransform="uppercase">
                          Profit
                        </Text>
                        <Text
                            color="green"
                            as="h1"
                            fontSize={['24px', '23px']}
                            fontWeight="bold"
                            className="qfont"
                            textTransform="capitalize"
                        >
                          {'N' + item.profit}
                        </Text>
                      </Stack>

                    </Stack>

                  </>
                </Stack>
                {item.status !== "active" && (
                    <Stack>
                      <Flex
                          w="full"
                          rounded="0"
                          className="afont"
                          bg="gray.100"
                          p="4"
                          justifyContent="space-between"
                          alignItems="center"
                      >
                        <Text textDecoration="underline" color="black">
                          Pending Approval
                        </Text>

                      </Flex>
                    </Stack>
                )}

                {item.status === "active" && (
                    <Stack>
                      <Flex
                          w="full"
                          rounded="0"
                          className="afont"
                          bg="gray.100"
                          p="4"
                          justifyContent="flex-end"
                          alignItems="center"
                      >
                        <Text textDecoration="underline" cursor="pointer" color="black">
                          <span  onClick={() => viewData(item)} >View Activity Reports</span>
                        </Text>

                      </Flex>
                    </Stack>
                )}

                <Modal isOpen={isReportOpen} onClose={onReportClose} size={"full"}>
                  <ModalOverlay />
                  <ModalContent className="mt-0 rounded-0  p-0" backgroundColor="#fafafa" h="100vh" position="fixed" overflowY="auto">
                    <ModalCloseButton zIndex="1000" background="black" border="1px solid white" color="white" className="btn-cls" />
                    <ModalBody className="p-0">
                      <PackDetailsPage data={item} />
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

              </Stack>
                )}

              {item.item.type.name.toLowerCase() !== farmtype.toLowerCase() && (
                  <>
                    <Stack
                        spacing="20px"
                        justifyContent="center"
                        p="5"
                        pos="relative"
                        top={["0%", "0%", '0%', '0%']}>
                      <HStack>
                        <FaTree color="green" fontSize="50"/>
                        <GiFarmTractor color="green" fontSize="50"/>
                      </HStack>

                      <h2>
                        You have no Farms Here
                      </h2>
                    </Stack>
                    <Stack
                        spacing="20px"
                        justifyContent="space-between"
                        shadow="lg"
                        bg="white"
                        p="5"
                        pos="relative"
                        border="1px solid"
                        borderColor="#efefef"
                        top={["0%", "0%", '0%', '-20%']}>
                      <Text as="h3" lineHeight="1.7">
                        you have no Farms Here Start Investing Today Learn more about this Farm and its packages or book a session with a customer service representative
                      </Text>
                      <div className="btn btn-primary">Book a Session</div>
                    </Stack>
                  </>

              )}


              </>
          ))}

        </SimpleGrid>
      </Container>




    </Stack>



  );
}

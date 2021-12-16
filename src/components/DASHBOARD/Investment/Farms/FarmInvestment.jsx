
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
  useDisclosure, Button,
} from "@chakra-ui/react"
import React, {useEffect} from 'react';
import {AiFillAppstore, AiFillCalendar,} from 'react-icons/ai';
import cashew from '../../../../assets/header/nuts.jpg';
import {FaCalendarAlt, FaLeaf, FaStamp, FaStop, FaTractor, FaTree, FaWallet} from "react-icons/fa";
import ContentLoader from "../../../../helpers/ContentLoader";
import {getAllUserPacks } from '../../../../apiServices/packServices';
import {getFarm } from '../../../../apiServices/farmServices';
import useQuery from "../../../../helpers/useQuery";
import {GiFarmTractor} from "react-icons/all";


export default function FarmInvestment() {
  const [allInvestment, setAllInvestment] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [contentChanged, setContentChanged] = React.useState(0)

  const [viewInvest, setViewInvest] = React.useState({})

  const farmtype = useQuery().get('farmtype');



  useEffect(() => {
    const fetch = async() => {
      try{
        const res = await getFarm()
        setAllInvestment(res.data.data)
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
        <Text as="h2" color="green" maxW="container.xl">Invest In {farmtype} </Text>
      </HStack>


      <Container maxW="container.xl" px={8} >
        <SimpleGrid columns={[1, 1, 3, 3]} spacing="40px">
          {/*{console.log(allInvestment)}*/}
          {allInvestment.map((data, index) => (
              <>
              {data.type.name.toLowerCase() === farmtype.toLowerCase() && (
              <Stack
                  spacing="20px"
                  justifyContent="space-between"
                  shadow="lg"
                  bg="white"
                  pos="relative"
                  border="1px solid"
                  borderColor="#efefef"
                  p={"5"}
              >
                <Stack spacing={"15px"}>
                  <Text fontSize={"24"} as={"b"}>{data.label}</Text>
                  <h6><b>Unit Price: </b>N {data.amount}</h6>
                  <HStack as={"small"} ><AiFillAppstore color={"green"}/> <b>Unit avialable: </b><span>{data.max}</span></HStack>
                  <Text>{data.description}</Text>
                  <Divider />
                  { new Date(data.cycle.end_date).toLocaleDateString([],
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }
                  ) >= new Date().toLocaleDateString([],
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }
                  )
                  && (
                      <Stack
                          p="3"
                          bg="gray.50"
                          border="1px solid #f1f1f1"
                          rounded="2"
                          mb={"====================="}
                      >
                        <HStack><FaWallet color="green"/> <b>Investment Window Opened</b></HStack>
                        <HStack>
                          <FaCalendarAlt/>
                          <span>{data.cycle.start_date}</span>
                          <span>----</span>
                          <b>{data.cycle.end_date}</b>
                        </HStack>
                      </Stack>
                  )}

                  { new Date(data.cycle.end_date).toLocaleDateString([],
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }
                  ) <= new Date().toLocaleDateString([],
                      {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      }
                  )
                  && (
                      <>
                        <HStack><FaStop color="red"/> <Text color="red">Investment Window Closed</Text></HStack>
                        <HStack>
                          <FaCalendarAlt/>
                          <span>{data.cycle.start_date}</span>
                          <span>----</span>
                          <b>{data.cycle.end_date}</b>
                        </HStack>
                      </>

                  )}





                  <Button
                  colorScheme={"green"}
                  >
                    Start Investing
                  </Button>
                </Stack>
              </Stack>
              )}
              {data.type.name.toLowerCase() !== farmtype.toLowerCase() && (
                  <h2>No farms Available here</h2>
              )}
              </>

          ))}

        </SimpleGrid>
      </Container>




    </Stack>



  );
}

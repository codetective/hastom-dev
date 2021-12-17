
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
  Button,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,useToast,
} from '@chakra-ui/react';
import { Modal, Spinner, Alert } from "react-bootstrap"
import React, {useEffect} from 'react';
import {AiFillAppstore, AiFillCalendar,} from 'react-icons/ai';
import cashew from '../../../../assets/header/nuts.jpg';
import {FaCalendarAlt, FaFilePdf, FaLeaf, FaStamp, FaStop, FaTractor, FaTree, FaWallet} from "react-icons/fa";
import ContentLoader from "../../../../helpers/ContentLoader";
import {getAllUserPacks } from '../../../../apiServices/packServices';
import {getFarm } from '../../../../apiServices/farmServices';
import useQuery from "../../../../helpers/useQuery";
import {GiFarmTractor} from "react-icons/all";
import { Formik } from 'formik';
import * as Yup from 'yup';
import {useState} from '@hookstate/core';
import store from '../../../../store/store';
import {createOrderPack} from '../../../../apiServices/packServices';
import {Link} from "react-router-dom";


function FarmDetailBox({ name, status, id, image, short_description,long_description }) {
  return (
      <Stack alignItems={"center"} spacing="25px" pb={"3"} w={"100%"}  justifyContent="center">
        <Box height="100px" w={"100%"}  pos="relative">
          <Image src={image} w="100%" h="100%" objectFit="cover"
                 alt='Farm Type'
                 fallbackSrc='https://via.placeholder.com/150' />
        </Box>
        <Container  maxW={"container.xl"} px="8">
          <HStack >
            {status !== 0 && (
                <Badge
                    mb={"4"}
                    position="relative"
                    rounded="full"
                    color="white"
                    bg="primary.100"
                    size="sm"
                    py="1"
                    pl="15px"
                    pr="15px"
                    textAlign="center"
                >
                  Opened
                </Badge>
            )}
          </HStack>
          <HStack pb={"4"}>
            <FaTractor color="green" fontSize="24"/>
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
          </HStack>


          <Text as="" fontWeight={"500"} color={"black"} mb={"3"} w={"100%"}>
            {short_description}
          </Text>
          <Text as="">
            {long_description}
          </Text>




        </Container>



      </Stack>
  );
}

export default function FarmInvestment({farmTypes}) {
  const [allInvestment, setAllInvestment] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [contentChanged, setContentChanged] = React.useState(0)
  const [farmID, setFarmId] = React.useState("")
  const [farmQTY, setFarmQTY] = React.useState("")
  const [openModal, setOpenModal] = React.useState(false)
  const toast = useToast();


  const [viewInvest, setViewInvest] = React.useState({})

  const farmtype = useQuery().get('farmtype');

  const handleClose = () => setOpenModal(false);
  const handleShow = () => setOpenModal(true);

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

  const startInvesting = (id,QTY) => {
    setFarmId(id)
    setFarmQTY(QTY)
    handleShow()
  }

  const {alertNotification} = useState(store)
    const {alertType} = useState(store)
    const {alertMessage} = useState(store)

    const initialValues = {
      quantity: "",
      item_id: farmID
    }

    const validationSchema = Yup.object({
      quantity: Yup.string().required("Order Quantity is required"),
    })

    const onSubmit = async(value) => {
      try{
        const res = await createOrderPack(value)
        if(res.status === 200){
          return toast({
            title: 'Congrats.',
            description: 'Farm Order is being processed',
            status: 'success',
            duration: 2000,
            isClosable: true,
            padding:"900"
          });
        }
        else{
          return toast({
            title: 'oops something went wrong.',
            description: 'Check your internet ',
            status: 'success',
            duration: 2000,
            isClosable: true,
            padding:"900"
          });
        }
      }
      catch(err){
        console.log(err)
        return toast({
          title: 'error',
          description: err.message,
          status: 'success',
          duration: 2000,
          isClosable: true,
          padding:"900"
        });
      }
    }



  return (
      isLoading ?
          <ContentLoader />
          :
    <Stack pb="40px"  justifyContent="center" alignItems= "center">

      <Modal show={openModal} onHide={handleClose} size="md">
        <Modal.Header>
          <Modal.Title>How many units do you want to Farm? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert show={alertNotification.get()} variant={alertType.get()}>
            <p className="alert-p"> {alertMessage.get()} </p>
          </Alert>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize={true}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          isSubmitting,
          handleBlur,
          handleSubmit,
          
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Text as={"small"}>You can only buy a maximum of <b>100</b> units to buy more units please kindly contact support</Text>
            <Box border="solid 1px #f7f5f6" p={"3"} bg={"gray.50"} my={"2"}>
              <Text as={"small"}><b>Note:</b> all investment above 10 million naira are performed offline. You can reach out to our Finiancial Administrator for clearance</Text>
            </Box>
            <HStack pt={"3"} as={"small"} ><AiFillAppstore color={"green"}/> <b>Unit avialable: </b><span>{farmQTY}</span></HStack>
            <Input
                  type="number"
                  placeholder="Order Quantity"
                  py="4"
                  // pl="45px"
                  rounded="sm"
                  bg="white"
                  name="quantity"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.quantity}
                  className='mt-2'
                  max={"100"}
                  min={"1"}
                  required={"required"}
                />
                <Button
                  size="md"
                  rounded="34px"
                  type="submit"
                  color="white"
                  bg="primary.100"
                  className='mt-3 mb-3'
                  px={'40px'}
                  _hover={{
                    bg: ['secondary.100'],
                  }}
                >
                  {isSubmitting ?
                  <Spinner animation="border"/>
                  :
                  "Submit"
                  }
                </Button>
                </form>
            )}
      </Formik>
        </Modal.Body>
      </Modal>


      <HStack w={"100%"}>
      {farmTypes.map(data => (
          <>
          {data.name.toLowerCase() === farmtype.toLowerCase() && (
              <Stack alignItems={"center"} w={"100%"} bg={"#f7f6f6"}>
          <FarmDetailBox
              name={data.name}
              status={data.status}
              id={data.name}
              short_description={data.short_description}
              long_description={data.long_description}
              image={'https://farmlandnigeria.com/storage/' + data.image}
          />
                <Container maxW={"container.xl"} pb={"5"} px={"8"} textDecoration={"underline"}>
                  <h3>View Agreement and Brochure</h3>
                  <Box width={["100%" ,"90%", "50%", "35%"]} pt={"5"}>
                    {
                      data.documents.length >= 0  ?
                          data.documents.map((item) => (
                              <a className="rounded-2 mb-2 me-2 col-auto d-flex align-items-center btn btn-dark text-white" >
                                <FaFilePdf className="fs-2 text-white me-2 "/>
                                <a  href={'https://farmlandnigeria.com/storage/' + item.path }>
                                  {item.path}
                                </a>
                              </a>
                          ))
                          :
                          <div>
                            <h6 className="fw-bold fs-4">NO avialable Documents</h6>
                            <p>all documents are being proccessed</p>
                          </div>

                    }
                  </Box>
                </Container>
                </Stack>
          )}
          </>
      ))}
      </HStack>




      <Container maxW="container.xl" px={8} >
        <HStack>
          <Text as={"b"} color={"green"} fontSize={"24"} py={"5"} textAlign={"left"} w={"100%"}>Available farms</Text>
        </HStack>


        <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px">
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
                          spacing={"20px"}
                      >
                        <HStack><FaWallet color="green"/> <b>Investment Opened</b></HStack>
                        <HStack flexWrap={"wrap"}>
                          <FaCalendarAlt/>
                          <span>{data.cycle.start_date}</span>
                          <span>----</span>
                          <b>{data.cycle.end_date}</b>
                        </HStack>
                        <Button
                            colorScheme={"green"}
                            onClick={() => startInvesting(data.id, data.max)}
                        >
                          Start Investing
                        </Button>
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




                </Stack>
              </Stack>
              )}

              </>

          ))}

        </SimpleGrid>
      </Container>




    </Stack>



  );
}

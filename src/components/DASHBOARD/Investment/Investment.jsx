import {
  Stack,
  HStack,
  SimpleGrid,
  Box,
  Image,
  Container,
  Badge,
  Button,
  Text,
} from '@chakra-ui/react';
import {FaDownload, FaFilePdf, FaMoneyBillAlt, FaTractor} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useQuery from '../../../helpers/useQuery';
import FarmInvestment from './Farms/FarmInvestment';
import {GiFallingLeaf} from "react-icons/all";
import {getFarmType} from '../../../apiServices/farmTypeServices';
import React, {useEffect} from 'react';
import ContentLoader from '../../../helpers/ContentLoader';


function PageTitle() {
  return (
    <Stack spacing="20px">
      <HStack direction={['row', 'row', 'column']} spacing="20px">
        <Box as="span" color="gray.400" fontSize="35px">
          <FaMoneyBillAlt />
        </Box>
        <Text
          color="gray.400"
          as="h1"
          fontSize={['24px', '28px']}
          fontWeight="bold"
          className="afont"
        >
          Farm Investments Available
        </Text>
      </HStack>
    </Stack>
  );
}

function FarmDetailBox({ name, status, id, image, short_description }) {
  return (
    <Stack spacing="20px" shadow="lg" bg="white" justifyContent="space-between">
      <Box height="200px" pos="relative">
        <Image src={image} w="100%" h="100%" objectFit="cover"
               alt='Farm Type'
               fallbackSrc='https://via.placeholder.com/150' />
          {status !== 0 && (
              <Badge
                  ml={5}
                  position="relative"
                  top="-15px"
                  rounded="full"
                  color="white"
                  bg="primary.100"
                  size="sm"
                  py="1"
                  pl="15px"
                  pr="30px"
                  textAlign="left"
              >
                  Opened
              </Badge>
          )}
          {status === 0 && (
              <Badge
                  ml={5}
                  position="relative"
                  top="-55px"
                  shadow={"lg"}
                  rounded="full"
                  color="red"
                  bg="red.50"
                  size="sm"
                  py="6"
                  px={"3"}
                  textTransform={"capitalize"}
                  textAlign="left"
              >
                  Closed
              </Badge>
          )}

      </Box>
      <Stack spacing="10px" px="5">
          <HStack>
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

          <Text as="small">
              {short_description}
          </Text>

          {status === 0 && (
              <Box py={"5"}>
                      <Badge
                          w="full"
                          rounded="0"
                          className="afont"
                          p={"3"}
                          variant='outline'
                          colorScheme="red"
                          textTransform={"capitalize"}
                      >
                          Farm is Currently Closed stay tuned for updates
                      </Badge>
              </Box>
          )}
          {status !== 0 && (
              <Box py={"5"}>
                  <Link to={'/dashboard/investments?farmtype=' + id}>
                      <HStack
                          w="full"
                          rounded="0"
                          className="afont"
                      >
                        <Text color={"green"} as={"b"} textDecoration={"underline"}>
                             View Avialable farms
                        </Text>

                      </HStack>
                  </Link>
              </Box>
          )}

      </Stack>



    </Stack>
  );
}

export default function MyPage() {
  const farmtype = useQuery().get('farmtype');
  const pack = useQuery().get('pack');


    const [farmTypes, setFarmTypes] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [contentChanged, setContentChanged] = React.useState(0)

    useEffect(() => {
        const fetch = async() => {
            try{
                const res = await getFarmType()
                setFarmTypes(res.data.data)
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
    <>
      {farmtype ? (
        <FarmInvestment />
      ) : (
        <Box>
          <Stack
            py="40px"
            bg="gray.100"
            h={['fit-content', 'fit-content', '40vh', '40vh']}
          >
            <Container maxW="container.xl" px={8}>
                <PageTitle />
              <SimpleGrid columns={[1, 1, 2, 3]} spacing="30px" mt="17" mb="50">
                  {farmTypes.map(data => (
                      <FarmDetailBox
                          name={data.name}
                          status={data.status}
                          id={data.name}
                          short_description={data.short_description}
                          image={'https://farmlandnigeria.com/storage/' + data.image}
                      />
                  ))}
              </SimpleGrid>
            </Container>
          </Stack>
        </Box>
      )}
    </>
  );
}

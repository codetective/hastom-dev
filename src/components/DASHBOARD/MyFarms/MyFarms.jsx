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
import {FaDownload, FaFilePdf, FaTractor} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import nuts from '../../../assets/header/nuts.jpg';
import cows from '../../../assets/header/cows.jpg';
import useQuery from '../../../helpers/useQuery';
import FarmsListing from './Farms/FarmsListing';
import {GiFallingLeaf} from "react-icons/all";
import {getFarmType} from '../../../apiServices/farmTypeServices';
import React, {useEffect} from 'react';
import ContentLoader from '../../../helpers/ContentLoader';
import {AiFillAppstore} from "react-icons/ai";


function PageTitle() {
  return (
    <Stack spacing="20px">
      <HStack direction={['row', 'row', 'column']} spacing="20px">
        <Box as="span" color="gray.400" fontSize="35px">
          <GiFallingLeaf />
        </Box>
        <Text
          color="gray.400"
          as="h1"
          fontSize={['24px', '28px']}
          fontWeight="bold"
          className="afont"
        >
          My Farms
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
                  top="-15px"
                  rounded="full"
                  color="white"
                  bg="secondary.100"
                  size="sm"
                  py="1"
                  pl="15px"
                  pr="30px"
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

          <>
            <HStack justifyContent="space-between" className="qfont">
              <Text
                textTransform="uppercase"
                color="secondary.100"
                fontWeight="bold"
                as="small"
              >
               Farms
              </Text>
            </HStack>
          </>

      </Stack>
      <Box>
        <Link to={'/dashboard/my-farms?farmtype=' + id}>
          <Button
            w="full"
            rounded="0"
            className="afont"
            bg="primary.100"
            _hover={{
              bg: 'secondary.100',
            }}
            color="white"
          >
            {/*{status === 0 ? 'Book a Spot' : 'View farms'}*/}
              View Farms
          </Button>
        </Link>
      </Box>
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
        <FarmsListing />
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

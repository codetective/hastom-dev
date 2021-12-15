import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  SimpleGrid,
  HStack,
  Flex,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import FarmsAndAccountsManagerBoxes from './FarmsAndAccountsManagerBoxes';
import StatsPanel from './StatsPanel';
import src from '../../../assets/blog/farmers2.jpg';
import {useState} from '@hookstate/core';
import store from '../../../store/store';
import {profile} from '../../../apiServices/userServices';
import {logout} from '../../../apiServices/authServices';
import ContentLoader from '../../../helpers/ContentLoader';



export default function DashboardOverview() {
  const [pageLoad, setPageLoad] = React.useState(true)
  const [Out, setOut] = React.useState(true)
  const {user} = useState(store)

  useEffect(() => {
    const fetch = async() => {
      try{
        const res = await profile()
        user.set(res.data)
        setPageLoad(false)
        console.log(user)
      }
      catch(err){
        console.log(err)
      }
    }
    fetch()
  }
  , [])


  return (
    <>
      {pageLoad ?
        <ContentLoader />
        :
      <Stack py="30px">
        <Container maxW="container.xl" px={8}>
          <h1 className="fs-5 mb-4">
            WELCOME <b className="text-uppercase">{user.data.get().name}</b>
          </h1>
        </Container>

        <StatsPanel user={user} />

        <Box py="30px">
          <Container maxW="container.xl" px={8}>
            <Stack
              spacing="25px"
              direction={['column', 'column', 'row', 'row']}
            >
              <FarmsAndAccountsManagerBoxes user={user} />


              <Box w={['100%', '100%' , '45%','35%']}>
                <Stack
                  backgroundImage={src}
                  bgRepeat="no-repeat"
                  bgPos="center"
                  bgColor="rgba(0,0,0,0.65)"
                  bgBlendMode="darken"
                  columns="2"
                  w="100%"
                  px="5"
                  py="7"
                  rounded="sm"
                  shadow="lg"
                  border="1px solid"
                  borderColor="gray.50"
                  spacing="20px"
                >
                  <Flex
                    alignItems="center"
                    as="h3"
                    fontSize={['20px', '20px']}
                    className="qfont"
                    color="white"
                    fontWeight="semi-bold"
                  >
                    Buy/Sell
                    Farmlands
                  </Flex>
                  <Stack color="white">
                    <Text as="small">
                      Lands are great value.
                      <br />
                      Own one today at great Discounts.
                    </Text>
                    <Button
                      color="white"
                      className="afont mt-4"
                      w="50%"
                      bg="secondary.100"
                      rounded="sm"
                      width="auto"
                      colorScheme="orange"
                    >
                      More
                    </Button>
                  </Stack>
                </Stack>
              </Box>


            </Stack>
          </Container>
        </Box>
      </Stack>
      }
    </>
  );
}

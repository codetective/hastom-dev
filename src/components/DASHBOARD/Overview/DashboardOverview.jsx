import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import FarmsAndAccountsManagerBoxes from './FarmsAndAccountsManagerBoxes';
import StatsPanel from './StatsPanel';
import src from '../../../assets/blog/farmers2.jpg';
import {useState} from '@hookstate/core';
import store from '../../../store/store';
import {profile} from '../../../apiServices/userServices';
import ContentLoader from '../../../helpers/ContentLoader';



export default function DashboardOverview() {
  const [pageLoad, setPageLoad] = React.useState(true)
  const {user} = useState(store)

  useEffect(() => {
    const fetch = async() => {
      try{
        const res = await profile()
        user.set(res.data.user)
        setPageLoad(false)
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
      <Stack py="40px">
        <Container maxW="container.xl" px={8}>
          <Text>
            Hello <b>{user.get().name}!</b>
          </Text>
        </Container>
        <StatsPanel />
        <Box py="30px">
          <Container maxW="container.xl" px={8}>
            <Stack
              spacing="20px"
              direction={['column', 'column', 'column', 'row']}
            >
              <FarmsAndAccountsManagerBoxes />
              <Box w={['100%', '100%', '100%', '40%']}>
                <SimpleGrid
                  backgroundImage={src}
                  bgRepeat="no-repeat"
                  bgPos="center"
                  bgColor="rgba(0,0,0,0.5)"
                  bgBlendMode="darken"
                  columns="2"
                  w="100%"
                  px="5"
                  py="7"
                  rounded="lg"
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
                    <br />
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
                      className="afont"
                      bg="secondary.100"
                      rounded="lg"
                      size="xs"
                      colorScheme="orange"
                    >
                      More
                    </Button>
                  </Stack>
                </SimpleGrid>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Stack>
      }
    </>
  );
}

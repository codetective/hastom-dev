import React from 'react';
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import {FaChartBar, FaChartLine, FaChartPie, FaEnvelope, FaMapPin, FaPhone} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OverviewBox from './OverviewBox';

export default function StatsPanel({user}) {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl" px={8} py={5}>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing="30px">
          <OverviewBox
            iconColor="green.600"
            icon={<FaChartPie />}
            title="capital invested"
            value={user.data.get().total_capital_invested ? user.data.get().total_capital_invested: "0"}
            index={0}
          />

          <OverviewBox
            iconColor="green.400"
            icon={<FaChartLine />}
            title="overall profits"
            value={user.data.get().total_profit_gotten ? user.data.get().total_profit_gotten: "0"}
            index={1}
          />

          <OverviewBox
            iconColor="secondary.100"
            icon={<FaChartBar />}
            title="total farm costs"
            value="$450.00"
            index={2}
          />

          <Stack py="4">
            <HStack spacing="10px">
              <FaEnvelope className='text-success'/>
              <Text as="small" className="afont" mx="0">
                {user.data.get().email ? user.data.get().email: "Email cannot be empty"}
              </Text>
            </HStack>
            <HStack spacing="10px">
              <FaPhone/>
              <b> {user.data.get().phone_number ? user.data.get().phone_number: "No Number"}</b>

            </HStack>
            <HStack spacing="10px">
              <FaMapPin/>
              <Text as="small">
                {user.data.get().location ? user.data.get().location: "No adderess"}
              </Text>
            </HStack>
          </Stack>

          {/*<Stack py="4">*/}
          {/*  <HStack spacing="10px">*/}
          {/*    <Text as="h2">4</Text>*/}
          {/*    <Text as="small" className="afont" mx="0">*/}
          {/*      FARMLANDS*/}
          {/*    </Text>*/}
          {/*  </HStack>*/}
          {/*  <Link*/}
          {/*    style={{*/}
          {/*      fontSize: 'small',*/}
          {/*      textDecoration: 'underline',*/}
          {/*    }}*/}
          {/*    to="/dashboard/farmlands"*/}
          {/*  >*/}
          {/*    Get Lands*/}
          {/*  </Link>*/}
          {/*</Stack>*/}


        </SimpleGrid>
      </Container>
    </Box>
  );
}

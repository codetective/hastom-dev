import React from 'react';
import {
  Box,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OverviewBox from './OverviewBox';

export default function StatsPanel() {
  return (
    <Box bg="gray.100">
      <Container maxW="container.xl" px={8}>
        <SimpleGrid columns={[1, 2, 2, 4]} spacing="30px">
          <OverviewBox
            iconColor="green.600"
            icon={<FaChartPie />}
            title="capital invested"
            value="$5900.00"
            index={0}
          />

          <OverviewBox
            iconColor="green.400"
            icon={<FaChartLine />}
            title="overall profits"
            value="$950.00"
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
              <Text as="h2">4</Text>
              <Text as="small" className="afont" mx="0">
                FARMLANDS
              </Text>
            </HStack>
            <Link
              style={{
                fontSize: 'small',
                textDecoration: 'underline',
              }}
              to="/dashboard/farmlands"
            >
              Get Lands
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

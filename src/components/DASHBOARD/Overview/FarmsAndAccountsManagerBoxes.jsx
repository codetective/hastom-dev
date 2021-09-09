import React from 'react';
import { Box, Stack, Text, HStack, Avatar } from '@chakra-ui/react';
import { FaChartLine, FaEnvelope } from 'react-icons/fa';

export default function FarmsAndAccountsManagerBoxes() {
  return (
    <Stack
      direction={['column', 'row']}
      w={['100%', '100%', '100%', '60%']}
      spacing="20px"
    >
      <HStack
        rounded="lg"
        w={['100%', '40%']}
        p="5"
        bg="white"
        shadow="lg"
        border="1px solid"
        borderColor="gray.50"
        spacing="30px"
      >
        <Box as="span" fontSize="45px" color="green.500">
          <FaChartLine />
        </Box>
        <Box>
          <Text as="small">Total Farms</Text>
          <Text as="h3" fontSize={['24px', '28px']}>
            4
          </Text>
        </Box>
      </HStack>

      <Stack
        justifyContent="center"
        rounded="lg"
        w={['100%', '60%']}
        p="5"
        bg="white"
        shadow="lg"
        border="1px solid"
        borderColor="gray.50"
      >
        <Text fontWeight="semibold" as="small">
          Account Manager
        </Text>
        <HStack justifyContent="space-between">
          <HStack>
            <Avatar
              size={'sm'}
              src={
                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
            <Box>
              <Text as="small">Mr. Ajayi Femi Micheal </Text>
              <Text as="small" color="secondary.100">
                Ajayi@gmail.com
              </Text>
            </Box>
          </HStack>
          <Box as="span" fontSize="35px" color="green.500">
            <FaEnvelope />
          </Box>
        </HStack>
      </Stack>
    </Stack>
  );
}

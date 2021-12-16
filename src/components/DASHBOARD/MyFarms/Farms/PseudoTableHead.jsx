import { Box, Text, SimpleGrid } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/react';

export default function PseudoTableHead() {
  const variant = useBreakpointValue({
    md: (
      <SimpleGrid
        columns={4}
        className="afont"
        px="4"
        py="2"
        border="1px solid"
        borderColor="gray.100"
        rounded="lg"
      >
        <Box px="3">
          <Text fontWeight="bold" color="textDarker.100">
            Date
          </Text>
        </Box>
        <Box px="3">
          <Text fontWeight="bold" color="textDarker.100">
            Report
          </Text>
        </Box>
        <Box px="3">
          <Text fontWeight="bold" color="textDarker.100">
            Actvity
          </Text>
        </Box>
        <Box px="3">
          <Text fontWeight="bold" color="textDarker.100">
            Media Links
          </Text>
        </Box>
      </SimpleGrid>
    ),
  });
  return <>{variant}</>;
}

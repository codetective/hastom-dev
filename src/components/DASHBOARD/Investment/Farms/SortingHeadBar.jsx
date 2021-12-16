import { HStack, Stack, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Button, Input, Select } from '@chakra-ui/react';

export default function SortingHeadBar() {
  const [startType, setStartType] = useState('text');
  const [stopType, setStopType] = useState('text');
  return (
    <Stack
      w={['100%', '100%', 'fit-content', 'fit-content']}
      rounded="lg"
      border="1px solid"
      borderColor="gray.100"
      px="4"
      py="2"
      direction={['column', 'column', 'row', 'row']}
    >
      <HStack spacing="10px">
        <Text className="afont">Filter</Text>
        <Select placeholder="priority" variant="filled" size="sm">
          <option value="high">High</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
        </Select>
      </HStack>
      <HStack spacing="10px">
        <Input
          type={startType}
          size="sm"
          onFocus={() => setStartType('date')}
          placeholder="stop date"
        />
        <Text fontWeight="bold" color="primary.100" fontSize="25px">
          -
        </Text>
        <Input
          type={stopType}
          size="sm"
          onFocus={() => setStopType('date')}
          placeholder="stop date"
        />
      </HStack>
      <HStack>
        <Button
          size="sm"
          colorScheme="green"
          variant="outline"
          className="qfont"
          rounded="0"
          _focus={{
            boxShadow: 'none',
          }}
        >
          Apply
        </Button>
      </HStack>
    </Stack>
  );
}

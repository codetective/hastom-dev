import { CloseButton, Flex, FormLabel, Text } from '@chakra-ui/react';
import React from 'react';

export default function FarmImagesSelect() {
  return (
    <div class="custom-file-container" data-upload-id="uploadFarmImages">
      <FormLabel>
        <Flex
          rounded="lg"
          py="2"
          bg="white"
          justifyContent="space-between"
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          <Text>Upload Images of FarmLand</Text>
          <CloseButton
            bg="red.500"
            color="white"
            as="a"
            className="custom-file-container__image-clear"
            title="Clear Image"
          />
        </Flex>
      </FormLabel>
      <label class="custom-file-container__custom-file">
        <input
          type="file"
          class="custom-file-container__custom-file__custom-file-input"
          accept="image/*"
          multiple
          aria-label="Choose Images"
        />
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <span class="custom-file-container__custom-file__custom-file-control"></span>
      </label>
      <div class="custom-file-container__image-preview"></div>
    </div>
  );
}

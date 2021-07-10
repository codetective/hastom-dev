import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout';

//staff card component
export default function StaffCard({ src, num, heading, text }) {
  return (
    <Box
      backgroundImage={src}
      bgPos="center"
      bgSize="cover"
      as="div"
      shadow="lg"
      width={['100%', '100%', '100%']}
      m="auto"
      // bg="white"
      rounded="lg"
      pos="relative"
      h="300px"
    >
      {/* <Box width="100%" zIndex="2" rounded="0">
        <Image
          rounded="md"
          margin="auto"
          src={src}
          alt="some good alt text"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box> */}

      <Stack pos="absolute" bottom="10px" bg="rgba(0, 0, 0, 0.6)" width="100%">
        <Box p={5}>
          <Center flexDirection="column">
            <Heading
              color="white"
              textAlign="center"
              as="h4"
              className="qfont"
              fontWeight="400"
              fontSize={['16px', '18px', '20px']}
              textTransform="capitalize"
              pl={2}
            >
              {heading}
            </Heading>

            <Text as="small" color="rgb(248, 162, 47)" textAlign="center">
              {text}
            </Text>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
}

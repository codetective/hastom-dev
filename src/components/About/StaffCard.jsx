import { Image } from '@chakra-ui/image';
import { Box, Center, Heading, Stack, Text } from '@chakra-ui/layout';

//staff card component
export default function StaffCard({ src, num, heading, text }) {
  return (
    <Box
      as="div"
      shadow="lg"
      width={['300px', '400px', '100%']}
      m="auto"
      bg="white"
    >
      <Box width="100%" zIndex="2" rounded="0" mb={4}>
        <Image
          margin="auto"
          src={src}
          alt="some good alt text"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>

      <Stack>
        <Box p={5}>
          <Center flexDirection="column">
            <Heading
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

            <Text as="small" color="textDark.100" textAlign="center">
              {text}
            </Text>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
}

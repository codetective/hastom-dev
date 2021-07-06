import { Image } from '@chakra-ui/image';
import { Box, Center, Circle, Heading, Stack, Text } from '@chakra-ui/layout';

export default function OurProcessCard({ src, num, heading }) {
  return (
    <Box
      as="div"
      shadow="lg"
      width={['300px', '400px', '100%']}
      m="auto"
      bg="white"
    >
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
              py="2"
            >
              {heading}
            </Heading>

            <Text as="small" color="textDark.100" textAlign="center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              recusandae. Aperiam consequuntur.?
            </Text>
          </Center>
        </Box>
      </Stack>
    </Box>
  );
}

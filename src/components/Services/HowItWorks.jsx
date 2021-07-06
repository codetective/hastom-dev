import {
  Box,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Container,
  Heading,
  Image,
} from '@chakra-ui/react';

const Steps = ({ title, text, icon }) => {
  return (
    <Stack alignItems="center">
      <Flex
        w={16}
        h={16}
        alignItems="center"
        justifyContent="center"
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        <Box as={'span'} fontSize="30px" color="primary.500">
          <Image src={icon} />
        </Box>
      </Flex>
      <Text className="qfont" fontWeight={600} textAlign="center">
        {title}
      </Text>
    </Stack>
  );
};

export default function HowItWorks({ p }) {
  return (
    <Box py={'80px'} w="100%" bg="white">
      <Container maxW="container.xl" px={8}>
        <Heading
          className="qfont"
          as="h2"
          fontSize={['24px', '28px']}
          fontWeight=" 500"
          letterSpacing="0"
          lineHeight="1.4"
          textAlign="center"
          pb="10"
        >
          <Text as="span">How It Works</Text>
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          {p.howItWorks.map((s, i) => {
            return <Steps key={i} icon={s.icon} title={s.text} />;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

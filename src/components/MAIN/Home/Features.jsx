import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import dashboard from '../../../assets/home/dashboard.svg';
import insurance from '../../../assets/home/insurance.svg';
import solar from '../../../assets/home/solar-energy.svg';

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        mb={1}
      >
        <Image src={icon} />
      </Flex>
      <Text color="textDarkest.100" fontWeight={700}>
        {title}
      </Text>
      <Text fontSize={['2rem', '1.5rem', '1.5rem', '2rem']} color={'gray.600'}>
        {text}
      </Text>
    </Stack>
  );
};

function Features() {
  return (
    <Box id="features" bg="white" position="relative" width="100vw" py="100px">
      <Container maxW="container.xl" px={8}>
        <Box textAlign={['left', 'center']} pt={'5'} pb={'15'}>
          <Heading
            className="qfont"
            as="h2"
            fontSize={['24px', '28px']}
            fontWeight=" 500"
            letterSpacing="0"
            lineHeight="1.4"
            mb="10"
            p={0}
          >
            <Text as="span">Why HASTOM</Text>
          </Heading>
        </Box>

        {/* <Stack spacing={'10'}>
          <Stack
            direction={['column', 'column', 'row', 'row']}
            columns={{ base: 1, md: 3 }}
            spacing={10}
            divider={
              <StackDivider
                borderColor="gray.200"
                style={{
                  marginTop: '40px',
                  marginBottom: '40px',
                }}
              />
            }
          > */}
        <SimpleGrid columns={[1, 2, 4, 4]} spacing="40px">
          <Feature
            icon={dashboard}
            title={'Land acquisition and sales'}
            text={'15,000+ acres'}
          />
          <Feature
            icon={insurance}
            title={'Farm Set-up and Management'}
            text={' 6,000+ acres'}
          />

          <Feature icon={solar} title={'Cashew Trade'} text={'6,000+ Mt'} />
          <Feature icon={solar} title={'Satisfied Customers '} text={'1000+'} />
        </SimpleGrid>
        {/* </Stack>
        </Stack> */}
      </Container>
    </Box>
  );
}

export default Features;

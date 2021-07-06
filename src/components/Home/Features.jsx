import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  Image,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import dashboard from '../../assets/home/dashboard.svg';
import insurance from '../../assets/home/insurance.svg';
import solar from '../../assets/home/solar-energy.svg';

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
      <Text font-size="14px" color={'gray.600'}>
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
          <Text
            as="p"
            color="#3eb900"
            font-weight="600"
            letter-spacing="0"
            white-space="nowrap"
            font-size="14px"
            p={0}
          >
            Don't settle for less
          </Text>

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
            <Text as="span">Why Farm With Us</Text>
          </Heading>
        </Box>

        <Stack spacing={'10'}>
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
          >
            <Feature
              icon={dashboard}
              title={'Farm Panel & Dashboard'}
              text={
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio omnis, voluptate facere facilis voluptatum a corrupti obcaecati sapiente libero quisquam! Sint ad quaerat aperiam'
              }
            />
            <Feature
              icon={insurance}
              title={'Approved & Insured Farms'}
              text={
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio omnis, voluptate facere facilis voluptatum a corrupti obcaecati sapiente libero quisquam! Sint ad quaerat aperiam'
              }
            />
            <Feature
              icon={solar}
              title={'Effective Farming System'}
              text={
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio omnis, voluptate facere facilis voluptatum a corrupti obcaecati sapiente libero quisquam! Sint ad quaerat aperiam'
              }
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Features;

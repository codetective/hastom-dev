import { Flex, Stack, Image, Box, HStack } from '@chakra-ui/react';
import { FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Route, Switch } from 'react-router-dom';
import loginScreen from '../assets/loginScreen.jpg';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';

import Logo from '../components/Nav/Logo';

const socialIcons = [
  {
    icon: <FaTwitter />,
    link: '##',
  },
  {
    icon: <FaLinkedinIn />,
    link: '##',
  },
  {
    icon: <FaInstagram />,
    link: '##',
  },
];

export default function Login() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        px={8}
        pb="3"
        flexDir="column"
        flex={0.5}
        align={'center'}
        justify={'space-between'}
      >
        <Box py="5">
          <Logo />
        </Box>

        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
        </Switch>

        <HStack spacing="30px" w="90%" py="5">
          {socialIcons.map((s, i) => (
            <Box
              key={i}
              as="span"
              transition="all .3s ease"
              _hover={{
                color: 'primary.100',
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="textDark.100"
              fontSize="25px"
            >
              {s.icon}
            </Box>
          ))}
        </HStack>
      </Flex>

      <Flex
        flex={1}
        display={['none', 'none', 'flex', 'flex']}
        w={[0, 0, '70%', '70%']}
        minH="100%"
        backgroundImage={loginScreen}
        bgSize="cover"
        bgPos="center"
      ></Flex>
    </Stack>
  );
}

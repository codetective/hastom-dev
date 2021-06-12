import React from 'react';

import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Container,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';

import Logo from './Logo';

const NavBar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavBarContainer {...props}>
      <Logo w="100px" />
      <MenuToggle toggle={onOpen} isOpen={isOpen} />
      <MenuLinks />
      <NavDrawer isOpen={isOpen} onClose={onClose} />
    </NavBarContainer>
  );
};
function NavDrawer({ isOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack
              align="center"
              justify={['center', 'space-between', 'flex-end', 'flex-end']}
              pt={[4, 4, 0, 0]}
            >
              <MenuItem
                color="textDarkest.100"
                py="5px"
                width="100%"
                textAlign="center"
              >
                <NavLink
                  onClick={onClose}
                  activeClassName="nav-active"
                  exact
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '5px 0',
                    transition: 'all .3s ease',
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </MenuItem>
              <MenuItem
                color="textDarkest.100"
                py="5px"
                width="100%"
                textAlign="center"
              >
                <NavLink
                  onClick={onClose}
                  activeClassName="nav-active"
                  style={{
                    padding: '5px 0',
                    display: 'block',
                    width: '100%',
                    transition: 'all .3s ease',
                  }}
                  to="/about"
                >
                  About
                </NavLink>
              </MenuItem>
              <MenuItem
                color="textDarkest.100"
                py="5px"
                width="100%"
                textAlign="center"
              >
                <NavLink
                  onClick={onClose}
                  activeClassName="nav-active"
                  style={{
                    padding: '5px 0',
                    display: 'block',
                    width: '100%',
                    transition: 'all .3s ease',
                  }}
                  to="/farms"
                >
                  Farms
                </NavLink>
              </MenuItem>
              <MenuItem
                color="textDarkest.100"
                py="5px"
                width="100%"
                textAlign="center"
              >
                <NavLink
                  onClick={onClose}
                  activeClassName="nav-active"
                  style={{
                    padding: '5px 0',
                    display: 'block',
                    width: '100%',
                    transition: 'all .3s ease',
                  }}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </MenuItem>
              <MenuItem
                color="textDarkest.100"
                py="5px"
                width="100%"
                textAlign="center"
              >
                <NavLink
                  onClick={onClose}
                  activeClassName="nav-active"
                  style={{
                    padding: '5px 0',
                    display: 'block',
                    width: '100%',
                    transition: 'all .3s ease',
                  }}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </MenuItem>
              {/* <MenuItem isLast>
                <NavLink to="/login" onClick={onClose}>
                  <Button
                    size="sm"
                    rounded="34px"
                    color="white"
                    bg="primary.100"
                    px={'40px'}
                    _hover={{
                      bg: ['secondary.100'],
                    }}
                  >
                    Login
                  </Button>
                </NavLink>
              </MenuItem> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Divider />
            <Flex alignItems="center" justifyContent="center">
              <Logo />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="green"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="green"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, ...rest }) => {
  return (
    <Text className="qfont" fontWeight="semibold" display="block" {...rest}>
      {children}
    </Text>
  );
};

const MenuLinks = ({ isOpen }) => {
  const { pathname } = useLocation();
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={5}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem color={pathname === '/' ? 'white' : 'textDarkest.100'}>
          <NavLink
            activeClassName="nav-active"
            exact
            style={{
              padding: '5px 0',
              transition: 'all .3s ease',
            }}
            to="/"
          >
            Home
          </NavLink>
        </MenuItem>
        <MenuItem color={pathname === '/' ? 'white' : 'textDarkest.100'}>
          <NavLink
            activeClassName="nav-active"
            style={{
              padding: '5px 0',
              transition: 'all .3s ease',
            }}
            to="/about"
          >
            About
          </NavLink>
        </MenuItem>
        <MenuItem color={pathname === '/' ? 'white' : 'textDarkest.100'}>
          <NavLink
            activeClassName="nav-active"
            style={{
              padding: '5px 0',
              transition: 'all .3s ease',
            }}
            to="/farms"
          >
            Farms
          </NavLink>
        </MenuItem>
        <MenuItem color={pathname === '/' ? 'white' : 'textDarkest.100'}>
          <NavLink
            activeClassName="nav-active"
            style={{
              padding: '5px 0',
              transition: 'all .3s ease',
            }}
            to="/blog"
          >
            Blog
          </NavLink>
        </MenuItem>
        <MenuItem color={pathname === '/' ? 'white' : 'textDarkest.100'}>
          <NavLink
            activeClassName="nav-active"
            style={{
              padding: '5px 0',
              transition: 'all .3s ease',
            }}
            to="/contact"
          >
            Contact
          </NavLink>
        </MenuItem>
        <MenuItem isLast>
          <NavLink to="/login">
            <Button
              size="sm"
              rounded="34px"
              color="white"
              bg="primary.100"
              px={'40px'}
              _hover={{
                bg: ['secondary.100'],
              }}
            >
              Login
            </Button>
          </NavLink>
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Container maxW="container.xl" px={8}>
      <Flex
        position="sticky"
        top="0"
        margin="auto"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        py={5}
        zIndex={10}
        {...props}
      >
        {children}
      </Flex>
    </Container>
  );
};

export default NavBar;
export { MenuItem };

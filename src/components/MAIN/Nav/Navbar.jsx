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
  Menu,
  MenuButton,
  MenuList,
  Accordion,
  AccordionItem,
  AccordionButton,
  Link as ServiceLink,
  AccordionPanel,
} from '@chakra-ui/react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import products from '../../../helpers/products';
import Logo from './Logo';
const navLinks = [
  {
    path: '/',
    pathname: 'Home',
  },
  {
    path: '/about',
    pathname: 'About',
  },
  {
    path: '/services',
    pathname: 'Services',
  },
  {
    path: '/blog',
    pathname: 'Blog',
  },
  {
    path: '/contact',
    pathname: 'Contact',
  },
];

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
              {navLinks.map((l, i) => {
                if (l.pathname === 'Services') {
                  return (
                    <MenuItem key={i} width="100%" color="black">
                      <Accordion
                        allowToggle
                        width="100%"
                        border="none"
                        _before={{
                          borderStyle: 'hidden',
                        }}
                      >
                        <AccordionItem border="none" width="100%">
                          <AccordionButton
                            border="none"
                            width="100%"
                            _hover={{
                              color: 'primary.100',
                              bg: 'transparent',
                            }}
                          >
                            <Box flex="1" textAlign="center">
                              Services
                            </Box>
                          </AccordionButton>
                          <AccordionPanel py={4} px="0" bg="gray.100">
                            {products.map((p, i) => {
                              return (
                                <ServiceLink
                                  key={i}
                                  onClick={onClose}
                                  as={Link}
                                  _hover={{
                                    bg: 'gray.50',
                                    color: 'primary.100',
                                  }}
                                  className="afont"
                                  style={{
                                    height: '100%',
                                    textAlign: 'center',
                                    width: '100%',
                                    display: 'block',
                                    padding: '5px 20px',
                                    color: 'textDark.100',
                                  }}
                                  to={p.path}
                                >
                                  {p.shortTitle}
                                </ServiceLink>
                              );
                            })}
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </MenuItem>
                  );
                }

                return (
                  <MenuItem
                    key={l.pathname}
                    color="textDarkest.100"
                    py="5px"
                    width="100%"
                    textAlign="center"
                  >
                    <NavLink
                      onClick={onClose}
                      activeClassName="nav-active-drawer"
                      exact={l.pathname === 'Home' ? true : false}
                      style={{
                        display: 'block',
                        width: '100%',
                        padding: '5px 0',
                        transition: 'all .3s ease',
                      }}
                      to={l.path}
                    >
                      {l.pathname}
                    </NavLink>
                  </MenuItem>
                );
              })}
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
        {navLinks.map((l, i) => {
          if (l.pathname === 'Services') {
            return (
              <MenuItem
                key={i}
                color={pathname === '/' ? 'white' : 'textDarkest.100'}
              >
                <Menu>
                  <MenuButton
                    as="a"
                    fontWeight="500"
                    px="0"
                    transition="all 0.2s"
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    width="100px"
                    _focus={{ boxShadow: 'outline' }}
                  >
                    Services
                  </MenuButton>
                  <MenuList>
                    {products.map((p, i) => {
                      return (
                        <MenuItem
                          key={i}
                          color="black"
                          _hover={{
                            bg: 'gray.100',
                          }}
                        >
                          <Link
                            style={{
                              height: '100%',
                              width: '100%',
                              display: 'block',
                              padding: '5px 20px',
                              color: 'inherit',
                            }}
                            to={p.path}
                          >
                            {p.shortTitle}
                          </Link>
                        </MenuItem>
                      );
                    })}
                    {/* <MenuItem
                      color="black"
                      _hover={{
                        bg: 'gray.100',
                      }}
                    >
                      <Link
                        style={{
                          height: '100%',
                          width: '100%',
                          display: 'block',
                          padding: '5px 20px',
                          color: 'inherit',
                        }}
                        to="/services"
                      >
                        All Services
                      </Link>
                    </MenuItem> */}
                  </MenuList>
                </Menu>
              </MenuItem>
            );
          }
          return (
            <MenuItem
              key={i}
              color={pathname === '/' ? 'white' : 'textDarkest.100'}
            >
              <NavLink
                activeClassName="nav-active"
                exact={l.pathname === 'Home' ? true : false}
                style={{
                  padding: '5px 0',
                  transition: 'all .3s ease',
                }}
                to={l.path}
              >
                {l.pathname}
              </NavLink>
            </MenuItem>
          );
        })}

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
  const { pathname } = useLocation();
  if (pathname === '/login' || pathname === '/register') {
    return null;
  }
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

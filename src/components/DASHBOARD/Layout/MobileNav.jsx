import React from 'react';
import {
  IconButton,
  Avatar,
    AvatarBadge,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  Container,
  Box,
} from '@chakra-ui/react';
import { FiMenu, FiBell } from 'react-icons/fi';
import Logo from '../../MAIN/Nav/Logo';

const MobileNav = ({ shrink, onOpen, ...rest }) => {
  return (
    <Box
      transition="margin 1s ease"
      ml={shrink ? { base: 0, md: 20 } : { base: 0, md: 60 }}
    >
      <Container maxW="container.xl" px={8}>
        <HStack>
          <Box transition="1s ease">
            <Logo w="100px" />
          </Box>

          <Flex
            w="90%"
            ml={{ base: 0, md: 60 }}
            pl={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            justifyContent={'flex-end'}
            {...rest}
          >
            <HStack spacing={{ base: '2', md: '2' }}>
              <IconButton
                size="sm"
                fontSize="25px"
                variant="ghost"
                aria-label="open menu"
                icon={<FiBell />}
              />
              <Flex alignItems={'center'} pl="2">
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: 'none' }}
                  >
                    <HStack>
                      <Avatar
                        size={'md'}
                        name=""
                      >
                      <AvatarBadge borderColor="papayawhip" bg="green" boxSize="1.25em" />
                      </Avatar>


                    </HStack>
                  </MenuButton>

                  <MenuList
                    bg={useColorModeValue('white', 'gray.900')}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    display={{ base: 'flex', md: 'none' }}
                  >
                    <MenuItem>Sign out</MenuItem>
                  </MenuList>
                </Menu>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Button
                    size="sm"
                    px="0"
                    variant="flushed"
                    fontSize="xs"
                    color="gray.600"
                  >
                    Log Out
                  </Button>
                </VStack>
              </Flex>
            </HStack>
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              onClick={onOpen}
              variant="flushed"
              fontSize="25px"
              aria-label="open menu"
              icon={<FiMenu />}
              ml="1"
            />
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
};

export default MobileNav;

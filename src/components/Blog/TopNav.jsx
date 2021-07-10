import {
  Stack,
  Flex,
  HStack,
  Container,
  Divider,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem as ChakraMenuItem,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../Nav/Navbar';
import { BiSearchAlt } from 'react-icons/bi';
import { AiTwotoneAppstore } from 'react-icons/ai';
import { useGenCtx } from '../../context/GeneralContext';

function TopNav() {
  const { categories } = useGenCtx();

  return (
    <Container maxW="container.xl" px={8}>
      <Flex justifyContent="space-between">
        <Stack
          display={['none', 'none', 'flex', 'flex']}
          spacing={5}
          align="center"
          justify={['flex-start', 'flex-start', 'flex-start', 'flex-start']}
          direction={['row', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          {' '}
          <MenuItem color="textDark">
            <NavLink
              activeClassName="nav-active-blog"
              exact
              style={{
                padding: '0 0 16px 0',

                transition: 'all .3s ease',
              }}
              to={'/blog'}
            >
              Latest
            </NavLink>
          </MenuItem>
          {categories.map((c, i) => {
            return (
              <MenuItem key={i} color="textDark">
                <NavLink
                  activeClassName="nav-active-blog"
                  exact
                  style={{
                    padding: '0 0 16px 0',

                    transition: 'all .3s ease',
                  }}
                  to={'/blog/' + c.uuid}
                >
                  {c.category}
                </NavLink>
              </MenuItem>
            );
          })}
        </Stack>
        <HStack
          ml="auto"
          width={['100%', '100%', 'fit-content']}
          justifyContent={['space-between', 'space-between', 'normal']}
        >
          <Menu isLazy zIndex="999">
            <MenuButton
              as={Button}
              size="sm"
              rounded="34px"
              color="white"
              bg="primary.100"
              _hover={{
                bg: '',
              }}
              px={'10px'}
              display={['flex', 'flex', 'none', 'none']}
              rightIcon={
                <Box size="sm" fontSize="23px" as="span" color="secondary.100">
                  <AiTwotoneAppstore />
                </Box>
              }
            >
              Categories
            </MenuButton>
            <MenuList py="0">
              {/* MenuItems are not rendered unless Menu is open */}

              <ChakraMenuItem p="0" color="textDark">
                <NavLink
                  activeClassName="nav-active-blog"
                  exact
                  style={{
                    padding: '5px 16px 16px 16px',

                    transition: 'all .3s ease',
                    width: '100%',
                  }}
                  to="/blog"
                >
                  Latest
                </NavLink>
              </ChakraMenuItem>

              {categories.map((c, i) => {
                return (
                  <ChakraMenuItem p="0" key={i} color="textDark">
                    <NavLink
                      activeClassName="nav-active-blog"
                      exact
                      style={{
                        padding: '5px 16px 16px 16px',

                        transition: 'all .3s ease',
                        width: '100%',
                      }}
                      to={'/blog/' + c.uuid}
                    >
                      {c.category}
                    </NavLink>
                  </ChakraMenuItem>
                );
              })}
            </MenuList>
          </Menu>

          <IconButton
            size="sm"
            fontSize="23px"
            as="span"
            color="gray.600"
            _hover={{
              fontSize: '26px',
              color: 'green',
            }}
          >
            <BiSearchAlt />
          </IconButton>
        </HStack>
      </Flex>

      <Divider pt={'10px'} />
    </Container>
  );
}

export default TopNav;

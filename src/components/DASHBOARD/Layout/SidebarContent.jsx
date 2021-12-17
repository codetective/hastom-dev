import React from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { FiHome, FiSettings, FiMenu, FiDatabase } from 'react-icons/fi';
import NavItem from './Navitem';
import { IoIosChatboxes } from 'react-icons/io';
import { BsFillPieChartFill } from 'react-icons/bs';
import {FaChartLine, FaInfo, FaInfoCircle, FaLeaf} from 'react-icons/fa';

const LinkItems = [
  { name: 'Dashboard', icon: FiHome, path: '/dashboard' },
  { name: 'My Farms', icon: FaLeaf, path: '/dashboard/my-farms' },
  {
    name: 'Investments',
    icon: FaChartLine,
    path: '/dashboard/investments',
  },
  // { name: 'Farmlands', icon: FiDatabase, path: '/dashboard/farmlands' },
  { name: 'Support', icon: FaInfoCircle, path: '/dashboard/support' },
  { name: 'Account', icon: FiSettings, path: '/dashboard/account' },
];

const SidebarContent = ({ shrinkSidebar, shrink, onClose, ...rest }) => {
  return (
    <Box
      transition="0.5s ease"
      bg="#00a621"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={shrink ? { base: 'full', md: 20 } : { base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <IconButton
          display={{ base: 'none', md: 'flex' }}
          onClick={shrinkSidebar}
          variant="flushed"
          fontSize="25px"
          aria-label="open menu"
          icon={<FiMenu />}
          color="white"
          ml={-2}
          _focus={{
            boxShadow: 'none',
          }}
        />
        <CloseButton className="bg-white fw-bold" display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Box pt="40px">
        {LinkItems.map(link => (
          <NavItem
            path={link.path}
            shrink={shrink}
            key={link.name}
            icon={link.icon}
          >
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default SidebarContent;

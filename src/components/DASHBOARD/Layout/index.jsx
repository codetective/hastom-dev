import React, { useState } from 'react';
import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';

import MobileNav from './MobileNav';
import SidebarContent from './SidebarContent';

export default function DashBoardShell({ children }) {
  const [shrink, setShrink] = useState(true);

  const shrinkSidebar = () => setShrink(prev => !prev);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white">
      <SidebarContent
        shrinkSidebar={shrinkSidebar}
        shrink={shrink}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} shrink={shrink} />
      <Box
        transition="margin 1s ease"
        ml={shrink ? { base: 0, md: 20 } : { base: 0, md: 60 }}
      >
        {children}
      </Box>
    </Box>
  );
}

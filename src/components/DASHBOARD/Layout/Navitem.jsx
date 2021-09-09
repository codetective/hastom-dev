import { Flex, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ shrink, path, icon, children, ...rest }) => {
  return (
    <NavLink
      style={{
        display: 'block',
        margin: '0',
        color: 'white',
        textDecoration: 'none',
      }}
      exact
      to={path}
      activeStyle={{
        color: 'green',
        background: 'white',
      }}
    >
      <Flex
        align="center"
        py="4"
        px="8"
        fontWeight="600"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'white',
          color: 'secondary.100',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'primary.100',
            }}
            as={icon}
          />
        )}
        {!shrink && <>{children}</>}
      </Flex>
    </NavLink>
  );
};

export default NavItem;

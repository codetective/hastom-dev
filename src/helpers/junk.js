/*





     
              <MenuItem
                color="textDarkest.100"
                py="5px"
                width="100%"
                textAlign="center"
              >
                <NavLink
                  onClick={onClose}
                  activeClassName="nav-active-drawer"
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
                  activeClassName="nav-active-drawer"
                  style={{
                    padding: '5px 0',
                    display: 'block',
                    width: '100%',
                    transition: 'all .3s ease',
                  }}
                  to="/services"
                >
                  Services
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
                  activeClassName="nav-active-drawer"
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
                  activeClassName="nav-active-drawer"
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
              { <MenuItem isLast>
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
              </MenuItem> }




NAV old code

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
            to="/services"
          >
            Services
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







*/
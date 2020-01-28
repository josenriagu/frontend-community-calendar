import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';

import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';

const NavBar = ({ alt, logged, notLogged, signin, signup }) => {
  const menu = (
    <Menu>
      {(logged || notLogged) && (
      <Menu.Item key="0">
        <Link href="#">
          <a>Create Event</a>
        </Link>
      </Menu.Item>
      )}
      {(logged || notLogged) && <Menu.Divider />}
      {(signin || signup) && (
      <Menu.Item key="1">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      )}
      {(signin || signup) && <Menu.Divider />}
      {logged && (
      <Menu.Item key="2">
        <Link href="/userdashboard">
          <a>Profile</a>
        </Link>
      </Menu.Item>
      )}
      {(notLogged || signup) && (
      <Menu.Item key="3">
        <Link href="/signin">
          <a>Sign in</a>
        </Link>
      </Menu.Item>
      )}
      {(notLogged || signin) && (
      <Menu.Item key="4">
        <Link href="/signup">
          <a>Sign up</a>
        </Link>
      </Menu.Item>
      )}
    </Menu>
  );
  return (
    <NavBarDiv>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        {(logged || notLogged) && (
          <Link href="#">
            <a>
              <Button medium background={colors.primary}>
                Create Event
              </Button>
            </a>
          </Link>
        )}
        {(signin || signup) && (
          <Link href="/">
            <a>
              <Button medium background={colors.primary}>
                Home
              </Button>
            </a>
          </Link>
        )}
        {logged && (
          <Link href="/userdashboard">
            <a>
              <Button medium background="inherit">
                Profile
              </Button>
            </a>
          </Link>
        )}
        {(notLogged || signup) && (
          <Link href="/signin">
            <a>
              <Button
                medium
                background="inherit"
                fontColor={alt ? colors.white : colors.primary}
              >
                Sign in
              </Button>
            </a>
          </Link>
        )}
        {(notLogged || signin) && (
          <Link href="/signup">
            <a>
              <Button
                medium
                background="inherit"
                fontColor={alt ? colors.white : colors.primary}
              >
                Sign up
              </Button>
            </a>
          </Link>
        )}
      </nav>
      <span>
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            <i className="fas fa-bars"></i>
          </a>
        </Dropdown>
      </span>
    </NavBarDiv>
  );
};

NavBar.defaultProps = {
  alt: false,
  signin: false,
  signup: false,
  logged: false,
  notLogged: false,
};

NavBar.propTypes = {
  alt: PropTypes.bool,
  signin: PropTypes.bool,
  signup: PropTypes.bool,
  logged: PropTypes.bool,
  notLogged: PropTypes.bool,
};

export default NavBar;

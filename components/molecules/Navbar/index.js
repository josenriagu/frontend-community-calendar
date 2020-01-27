import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';

const NavBar = ({ alt, logged, notLogged, signin, signup, createEvent }) => (
  <NavBarDiv>
    <Link href="/">
      <Logo />
    </Link>
    <nav>
      {(logged || notLogged) && (
        <Link href="/event">
          <a>
            <Button medium background={colors.primary}>
              Create Event
            </Button>
          </a>
        </Link>
      )}
      {(signin || signup || createEvent) && (
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
            <Button medium background="inherit" fontColor={alt ? colors.white : colors.primary}>
              Sign in
            </Button>
          </a>
        </Link>
      )}
      {(notLogged || signin) && (
        <Link href="/signup">
          <a>
            <Button medium background="inherit" fontColor={alt ? colors.white : colors.primary}>
              Sign up
            </Button>
          </a>
        </Link>
      )}
    </nav>
  </NavBarDiv>
);

NavBar.defaultProps = {
  alt: false,
  signin: false,
  signup: false,
  logged: false,
  notLogged: false,
  createEvent: false,
};

NavBar.propTypes = {
  alt: PropTypes.bool,
  signin: PropTypes.bool,
  signup: PropTypes.bool,
  logged: PropTypes.bool,
  notLogged: PropTypes.bool,
  createEvent: PropTypes.bool,
};


export default NavBar;

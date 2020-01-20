/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';

const NavBar = ({ alt, notLoggedIn, notSignedIn, eventAuthToken }) => {
  const logout = () => Cookie.remove('comcal-event-token');

  return (
    <NavBarDiv>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        {(alt || eventAuthToken) && (
        <Link href="/create-event">
          <a>
            <Button medium background={colors.primary}>
              Create Event
            </Button>
          </a>
        </Link>
        )}
        {(notLoggedIn || notSignedIn) && (
        <Link href="/">
          <a>
            <Button medium background={colors.primary}>
              Home
            </Button>
          </a>
        </Link>
        )}
        {(eventAuthToken) && (
        <Link href="/userdashboard">
          <a>
            <Button medium background="inherit">
             Profile
            </Button>
          </a>
        </Link>
        )}

        {(eventAuthToken) && (
          <Link href="/">
            <a>
              <Button onClick={logout} medium background="inherit">
             Logout
              </Button>
            </a>
          </Link>
        )}

        {(alt || notSignedIn) && (
        <Link href="/signin">
          <a>
            <Button medium background="inherit" fontColor={alt ? colors.white : colors.primary}>
              Sign in
            </Button>
          </a>
        </Link>
        )}

        {(alt || notLoggedIn) && (
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
};

NavBar.defaultProps = {
  alt: false,
  notLoggedIn: false,
  notSignedIn: false,
  eventAuthToken: false,
};

NavBar.propTypes = {
  alt: PropTypes.bool,
  notLoggedIn: PropTypes.bool,
  notSignedIn: PropTypes.bool,
  eventAuthToken: PropTypes.bool,
};

export default NavBar;

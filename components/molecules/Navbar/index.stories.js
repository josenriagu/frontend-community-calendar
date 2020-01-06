import React from 'react';
import PropTypes from 'prop-types';

import { NavBarDiv } from './index';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';

import { colors } from '../../~reusables';

const Navbar = ({ alt }) => (
  <NavBarDiv>
    {alt && <Logo coloredLogo />}
    {!alt && <Logo />}
    <nav>
      <a href="/create-event"><Button medium>Create Event</Button></a>
      {alt && <a href="/login"><Button medium background="inherit" fontColor={colors.secondary}>Login</Button></a>}
      {!alt && <a href="/login"><Button medium background="inherit">Login</Button></a>}
      {alt && <a href="/signup"><Button medium background="inherit" fontColor={colors.secondary}>Signup</Button></a>}
      {!alt && <a href="/signup"><Button medium background="inherit">Signup</Button></a>}
    </nav>
  </NavBarDiv>
);

export const NavBar = () => (
  <Navbar />
);

export const NavBarAlt = () => (
  <Navbar alt />
);

export default { title: 'Navbar' };

Navbar.defaultProps = {
  alt: false,
};

Navbar.propTypes = {
  alt: PropTypes.bool,
};

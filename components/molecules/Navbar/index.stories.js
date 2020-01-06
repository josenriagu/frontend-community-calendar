import React from 'react';
import PropTypes from 'prop-types';

import { NavBarDiv } from './index';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';

const Navbar = ({ alt }) => (
  <NavBarDiv>
    {alt ? <Logo coloredLogo /> : <Logo />}
    <nav>
      <a href="/create-event"><Button medium>Create Event</Button></a>
      <a href="/login"><Button medium background="inherit">Login</Button></a>
      <a href="/signup"><Button medium background="inherit">Signup</Button></a>
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
  alt: '',
};

Navbar.propTypes = {
  alt: PropTypes.string,
};

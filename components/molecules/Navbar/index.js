/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';

const NavBar = ({ alt }) => (
  <NavBarDiv>
    <Logo />
    <nav>
      <Link href="/create-event"><a><Button medium background={colors.primary}>Create Event</Button></a></Link>
      {alt && <Link href="/login"><a><Button medium background="inherit" fontColor={colors.primary}>Login</Button></a></Link>}
      {!alt && <Link href="/login"><a><Button medium background="inherit">Login</Button></a></Link>}
      {alt && <Link href="/signup"><a><Button medium background="inherit" fontColor={colors.primary}>Signup</Button></a></Link>}
      {!alt && <Link href="/signup"><a><Button medium background="inherit">Signup</Button></a></Link>}
    </nav>
  </NavBarDiv>
);

NavBar.defaultProps = {
  alt: false,
};

NavBar.propTypes = {
  alt: PropTypes.bool,
};

export default NavBar;

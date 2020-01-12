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
      <Link href="/create-event"><Button medium background={colors.primary}>Create Event</Button></Link>
      {alt && <Link href="/login"><Button medium background="inherit" fontColor={colors.primary}>Login</Button></Link>}
      {!alt && <Link href="/login"><Button medium background="inherit">Login</Button></Link>}
      {alt && <Link href="/signup"><Button medium background="inherit" fontColor={colors.primary}>Signup</Button></Link>}
      {!alt && <Link href="/signup"><Button medium background="inherit">Signup</Button></Link>}
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

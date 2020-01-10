import React from 'react';
import PropTypes from 'prop-types';

import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';
// import lod from '../../organisms/Login'

const NavBar = ({ alt }) => (
  <NavBarDiv>
    <Logo />
    <nav>
      <a href="/create-event">
        <Button medium background={colors.primary}>
          Create Event
        </Button>
      </a>
      {alt && (
        <a href="/login">
          <Button medium background="inherit" fontColor={colors.primary}>
            Login
          </Button>
        </a>
      )}
      {!alt && (
        <a href="/login">
          <Button medium background="inherit">
            Login
          </Button>
        </a>
      )}
      {alt && (
        <a href="/signup">
          <Button medium background="inherit" fontColor={colors.primary}>
            Signup
          </Button>
        </a>
      )}
      {!alt && (
        <a href="/signup">
          <Button medium background="inherit">
            Signup
          </Button>
        </a>
      )}
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

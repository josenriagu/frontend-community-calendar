import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { NavBarDiv } from "../../molecules/Navbar/index.styled";
import { Logo } from "../../atoms/Logo";
import { Button } from "../../atoms/Button";
import { colors } from "../../~reusables";

const AuthNavBar = ({ alt }) => (
  <NavBarDiv>
    <Logo coloredLogo />
    <nav style={{ display: "flex", justifyContent: "space-AROUND" }}>
      <a href="/create-event">
        <Button medium>Home</Button>
      </a>
      {alt ? (
        <a href="../signup">
          <Button medium background="inherit" fontColor={colors.secondary}>
            Signup
          </Button>
        </a>
      ) : (
        <a href="/login">
          <Button medium background="inherit" fontColor={colors.secondary}>
            Login
          </Button>
        </a>
      )}
    </nav>
  </NavBarDiv>
);

AuthNavBar.defaultProps = {
  alt: false
};

AuthNavBar.propTypes = {
  alt: PropTypes.bool
};

export default AuthNavBar;

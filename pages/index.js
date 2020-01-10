/* eslint-disable react/button-has-type */
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { doSignUp } from "../redux/actions/signUp";
import { Login } from "../components/organisms/Login/";

const Home = ({ doSignUp }) => {
  const onSignUp = event => {
    event.preventDefault();
    const user = {
      name: "Tola"
    };

    doSignUp(user);
  };

  return (
    <>
      <Login />
    </>
  );
};

export default connect(state => state, { doSignUp })(Home);

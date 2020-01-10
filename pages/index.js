/* eslint-disable react/button-has-type */
<<<<<<< HEAD
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
=======
import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyles';
import App from '../components/layout/App';

import { doSignUp } from '../redux/actions/signUp';

const Home = () => (
  <>
    <GlobalStyle />
    <Head>
      {/* Stylesheet links */}
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
    </Head>
    <App />
  </>
);
>>>>>>> 982c88b05c4cfcb3ef9a4fc22a88edbc8e39897b

export default connect(state => state, { doSignUp })(Home);

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { doSignUp } from '../redux/actions/signUp';
import Dashboard from '../components/organisms/Dashboard/';

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
      <Dashboard />
    </>
  );
};

export default connect(state => state, { doSignUp })(Home);
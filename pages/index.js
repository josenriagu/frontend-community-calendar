/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { doSignUp } from '../redux/actions/signUp';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const Home = () => {
  const onSignUp = event => {
    event.preventDefault();
    const user = {
      name: 'Tola',
    };

    doSignUp(user);
  };

  return (
    <Title>
      Homepage
      <button
        onClick={event => onSignUp(event)}
      >
        Click to signup
      </button>
    </Title>
  );
};

export default connect(
  state => state,
  { doSignUp },
)(Home);

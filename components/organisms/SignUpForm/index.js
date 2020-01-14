import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button';
import NavBar from '../../molecules/Navbar';
import Label from '../../atoms/Label';
import Paragraph from '../../atoms/Paragraph';
import Input from '../../atoms/Input';
import { colors } from '../../~reusables';
import { doSignUp } from '../../../redux/actions/signUp';
import * as Styles from './index.styled';


// eslint-disable-next-line no-shadow
const SignUpForm = ({ doSignUp }) => {
  const initialState = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  };
  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event, newUser) => {
    event.preventDefault();
    doSignUp(newUser);
  };

  return (
    <Styles.PageWrapper>
      <NavBar notSignedIn />
      <Styles.BorderDiv>
        <Styles.Form onSubmit={event => handleSubmit(event, credentials)}>
          <Styles.InputDiv>
            <Label
              medium
              weight="bold"
            >
              FirstName
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="first_name"
              value={credentials.first_name}
            />
          </Styles.InputDiv>
          <Styles.InputDiv>
            <Label
              medium
              weight="bold"
            >
              LastName
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="last_name"
              value={credentials.last_name}
            />
          </Styles.InputDiv>
          <Styles.InputDiv>
            <Label
              medium
              weight="bold"
            >
              Username
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="username"
              value={credentials.username}
            />
          </Styles.InputDiv>
          <Styles.InputDiv>
            <Label
              medium
              weight="bold"
            >
              Email address
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="email"
              value={credentials.email}
            />
          </Styles.InputDiv>
          <Styles.InputDiv>
            <Label
              medium
              weight="bold"
            >
              Password
            </Label>
            <Input
              xLarge
              type="password"
              onChange={handleChange}
              name="password"
              value={credentials.password}
            />
          </Styles.InputDiv>
          <Paragraph>
            Lagos,NG(Change)
          </Paragraph>
          <br />
          <Button
            xLarge
            background={colors.primary}
          >
            Sign up
          </Button>
        </Styles.Form>
      </Styles.BorderDiv>
    </Styles.PageWrapper>
  );
};

SignUpForm.propTypes = {
  doSignUp: PropTypes.func.isRequired,
};

export default connect(state => state, { doSignUp })(SignUpForm);

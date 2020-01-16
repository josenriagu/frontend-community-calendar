/* eslint-disable no-shadow */
/* eslint-disable no-confusing-arrow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import { Button as AntButton } from 'antd';

import { doSignIn } from '../../../redux/actions/signIn';
import Paragraph from '../../atoms/Paragraph';
import NavBar from '../../molecules/Navbar';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import * as Styles from '../SignUpForm/index.styled';
import { StyledDiv } from './index.styled';
import { colors } from '../../~reusables';

const schema = {
  username: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
      maximum: 64,
    },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 6,
      maximum: 128,
    },
  },
};

const SignInForm = ({ doSignIn, requesting, error }) => {
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });
  const [antButtonState, setAntButtonState] = useState({
    loading: false,
    iconLoading: false,
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const hasError = field => !!(formState.touched[field] && formState.errors[field]);

  const handleSubmit = async (event, user) => {
    event.preventDefault();
    setAntButtonState({
      iconLoading: antButtonState.iconLoading,
      loading: true,
    });
    doSignIn(user);
  };

  return (
    <Styles.PageWrapper>
      <NavBar notLoggedIn />
      <Styles.BorderDiv>
        <Styles.Form>
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
              value={formState.values.username || ''}
            />
            {
              hasError('username') ? <Paragraph color="hsla(359,98%,68%,1)">{formState.errors.username[0]}</Paragraph> : null
            }
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
              value={formState.values.password || ''}
            />
            {
              hasError('password') ? <Paragraph color="hsla(359,98%,68%,1)">{formState.errors.password[0]}</Paragraph> : null
            }
          </Styles.InputDiv>
          <StyledDiv>
            <Input xLarge type="checkbox" />
            <Paragraph>Remember me</Paragraph>
          </StyledDiv>
          {/* <Button
            disabled={!formState.isValid}
            xLarge
            background={colors.primary}
          >
            Login
          </Button> */}
          <AntButton
            type="primary"
            disabled={!formState.isValid}
            loading={!!(error && error.status)}
            onClick={async (event) => {
              handleSubmit(event, formState.values);
            }}
            style={{
              backgroundColor: `${!formState.isValid ? 'lightpink' : colors.primary}`,
            }}
          >
            Login
          </AntButton>
          {(error && error.status) > 400 && <Paragraph color="hsla(359,98%,68%,1)">Username or password is invalid</Paragraph>}
        </Styles.Form>
      </Styles.BorderDiv>
    </Styles.PageWrapper>
  );
};
SignInForm.propTypes = {
  doSignIn: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  requesting: state.signIn.requesting,
  userData: state.signIn.user.user,
  error: state.signIn.error,
});
export default connect(mapStateToProps, { doSignIn })(SignInForm);

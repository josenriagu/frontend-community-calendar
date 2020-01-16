/* eslint-disable prefer-template */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button as AntButton } from 'antd';
import validate from 'validate.js';

import NavBar from '../../molecules/Navbar';
import Label from '../../atoms/Label';
import Paragraph from '../../atoms/Paragraph';
import Input from '../../atoms/Input';
import { colors } from '../../~reusables';
import { doSignUp } from '../../../redux/actions/signUp';

const schema = {
  first_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 2,
      maximum: 64,
    },
  },
  last_name: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 2,
      maximum: 128,
    },
  },
  email: {
    presence: { allowEmpty: false, message: 'is required' },
    email: true,
    length: {
      minimum: 4,
      maximum: 128,
    },
  },
  username: {
    presence: { allowEmpty: false, message: 'is required' },
    length: {
      minimum: 3,
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

export const BorderDiv = styled.div`
  width: 350px;
  height: auto;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding: 2.5rem 0;
  border-radius: 20px;
`;

export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpForm = ({ doSignUp }) => {
  const [antButtonState, setAntButtonState] = useState({
    loading: false,
    iconLoading: false,
  });
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  const handleChange = event => {
    event.persist();

    setFormState((formState) => ({
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setAntButtonState({
      iconLoading: antButtonState.iconLoading,
      loading: true,
    });
    doSignUp(formState.values);
  };

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  return (
    <div>
      <NavBar notSignedIn />
      <BorderDiv>
        <Form>
          <InputDiv>
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
              value={formState.values.first_name || ''}
            />
            {
              hasError('first_name') ? <Paragraph color="hsla(359,98%,68%,1)">{formState.errors.first_name[0]}</Paragraph> : null
            }
          </InputDiv>
          <InputDiv>
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
              value={formState.values.last_name || ''}
            />
            {
              hasError('last_name') ? <Paragraph color="hsla(359,98%,68%,1)">{formState.errors.last_name[0]}</Paragraph> : null
            }
          </InputDiv>
          <InputDiv>
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
          </InputDiv>
          <InputDiv>
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
              value={formState.values.email || ''}
            />
            {
              hasError('email') ? <Paragraph color="hsla(359,98%,68%,1)">{formState.errors.email[0]}</Paragraph> : null
            }
          </InputDiv>
          <InputDiv>
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
          </InputDiv>
          <Paragraph>
            Lagos,NG(Change)
          </Paragraph>
          <br />
          {/* <Button
            xLarge
            background={colors.primary}
          >
            Sign up
          </Button> */}
          <AntButton
            type="primary"
            disabled={!formState.isValid}
            loading={antButtonState.loading}
            onClick={async (event) => {
              handleSubmit(event, formState.values);
            }}
            style={{
              backgroundColor: `${!formState.isValid ? 'lightpink' : colors.primary}`,
            }}
          >
            Sign up
          </AntButton>
        </Form>
      </BorderDiv>
    </div>
  );
};

export default connect(state => state, { doSignUp })(SignUpForm);

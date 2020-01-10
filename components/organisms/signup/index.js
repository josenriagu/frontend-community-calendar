import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../../atoms/Button";
import AuthNavBar from "../AuthNavBar/";
import Input from "../../atoms/Input/";
import axios from "axios";

export const BorderDiv = styled.div`
  width: 25rem;
  height: 32rem;
  margin: 0 auto;
  margin-top: 0.3rem;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding-top: 1rem;
`;
export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
`;
export const Label = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 0.5rem;
  margin-top: 0;
  margin-right: 7rem;
  font-size: 1.3rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Register = () => {
  const initialState = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: ""
  };
  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e, credentials) => {
    e.preventDefault();
    axios
      .post(
        "https://comcalstaging.herokuapp.com/api/v1/users/register",
        credentials
      )
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <AuthNavBar />
      <BorderDiv>
        <Form onSubmit={e => handleSubmit(e, credentials)}>
          <InputDiv>
            <Label>FirstName</Label>
            <Input
              style={{ height: "2.3rem" }}
              large
              type="text"
              onChange={handleChange}
              name="first_name"
              value={credentials.first_name}
            />
          </InputDiv>
          <InputDiv>
            <Label>LastName</Label>
            <Input
              style={{ height: "2.3rem" }}
              large
              type="text"
              onChange={handleChange}
              name="last_name"
              value={credentials.last_name}
            />
          </InputDiv>
          <InputDiv>
            <Label>Username</Label>
            <Input
              style={{ height: "2.3rem" }}
              large
              type="text"
              onChange={handleChange}
              name="username"
              value={credentials.username}
            />
          </InputDiv>

          <InputDiv>
            <Label>Email address</Label>
            <Input
              style={{ height: "2.3rem" }}
              large
              type="text"
              onChange={handleChange}
              name="email"
              value={credentials.email}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              style={{ height: "2.3rem" }}
              large
              type="text"
              onChange={handleChange}
              name="password"
              value={credentials.password}
            />
          </InputDiv>
          <Paragraph>Lagos,NG(Change)</Paragraph>
          <Button large style={{ width: "20rem", height: "2.5rem" }}>
            Sign up
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};

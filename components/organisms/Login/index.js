import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { loginStatus } from "../../../redux/actions/Login";
import { Button } from "../../atoms/Button";
import AuthNavBar from "../AuthNavBar/";
import Input from "../../atoms/Input/";
import { Label, InputDiv, Form } from "../signup";

export const Login = () => {
  const initialState = {
    username: "",
    password: ""
  };
  const dispatch = useDispatch();

  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e, credentials) => {
    e.preventDefault();
    Axios.post(
      "https://comcalstaging.herokuapp.com/api/v1/users/signin",
      credentials
    )
      .then(({ data }) => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
      <AuthNavBar alt />
      <BorderDiv>
        <Form onSubmit={e => handleSubmit(e, credentials)}>
          <InputDiv>
            <Label>Username</Label>
            <Input
              large
              type="text"
              onChange={handleChange}
              name="username"
              value={credentials.username}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              large
              type="password"
              onChange={handleChange}
              name="password"
              value={credentials.password}
            />
          </InputDiv>
          <StyledDiv>
            <Input type="checkbox" />
            <p>Remember me</p>
          </StyledDiv>
          <Button large style={{ width: "20rem", height: "3rem" }}>
            Login
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};

const BorderDiv = styled.div`
  width: 25rem;
  height: 25rem;
  margin: 0 auto;
  margin-top: 2rem;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding-top: 3rem;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-right: 12rem;
  margin-top: -1rem;
  margin-bottom: 1rem;
`;

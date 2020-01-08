import React, { useState } from "react";
import styled from "styled-components";

import { Button } from "../../atoms/Button";
import { NavbarAlt } from "../../molecules/Navbar/index.stories";
import Input from "../../atoms/Input/";
import { Label, InputDiv, Form } from "../signup";

export const Login = () => {
  const initialState = {
    email: "",
    password: ""
  };
  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };
  return (
    <div>
      <NavbarAlt />
      <BorderDiv>
        <Form>
          <InputDiv>
            <Label>Email</Label>
            <Input
              large
              type="text"
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
              large
              type="text"
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

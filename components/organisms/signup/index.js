import React from "react";
import styled from "styled-components";

import { Button } from "../../atoms/Button";
import { NavBarAlt } from "../../molecules/Navbar/index.stories";
import { inputLarge as Input } from "../../atoms/Input/index.stories";

export const BorderDiv = styled.div`
  width: 385px;
  height: 470px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
`;

export const Label = styled.div`
  float: left;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  margin-left: 27px;
`;
export const LineBreak = styled.br`
  margin-bottom: 130px;
`;

export const InputDiv = styled.div`
  margin-top: 30px;
`;
export const Paragraph = styled.p`
  float: left;
  margin-left: 27px;
  margin-bottom: 35px;
  margin-top: 20px;
`;

export const Register = () => {
  return (
    <div>
      <NavBarAlt />
      <BorderDiv>
        <InputDiv>
          <Label>Name</Label>
          <br />
          <Input type="text" />
        </InputDiv>

        <InputDiv>
          <Label>Email address</Label>
          <br />
          <Input type="text" />
        </InputDiv>

        <InputDiv>
          <Label>Password</Label>
          <br />
          <Input type="text" />
        </InputDiv>
        <Paragraph>Lagos,NG(Change)</Paragraph>
        <Button large style={{ width: "358px", height: "52px" }}>
          Sign up
        </Button>
      </BorderDiv>
    </div>
  );
};

import React from "react";
import { BorderDiv, InputDiv, Label, Paragraph } from "./index";
import { Button } from "../../atoms/Button";
import { NavBarAlt } from "../../molecules/Navbar/index.stories";
import { inputLarge as Input } from "../../atoms/Input/index.stories";

const Register = () => {
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

export const Signup = () => <Register />;

export default { title: "Register" };

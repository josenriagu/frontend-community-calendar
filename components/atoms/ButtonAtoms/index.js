import React from 'react';
import styled from 'styled-components';

export default function Buttons(props) {
  const LargeButton = styled.button`
    background-color: ${props => props.background || '#CE5374'};
    border: none;
    color: ${props => props.fontColor || 'white'};
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    width: 348px;
    height: 58px;
    font-weight: 600;
    font-size: 20px;
  `;

  const MediumButton = styled.button`
  background-color: ${props => props.background || '#CE5374'};
    border: none;
    color: ${props => props.fontColor || 'white'};
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    width: 114px;
    height: 40px;
    font-weight: 500;
    font-size: 16px;
  `;

  const SmallButton = styled.button`
    background-color: ${props => props.background || '#CE5374'};
    border: none;
    color: ${props => props.fontColor || 'white'};
    padding: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    width: 83px;
    height: 33px;
    font-weight: 500;
    font-size: 16px;
  `;

  const ButtonComponent = () => {
    if (props.size === 'small') {
      return (
        <SmallButton
          background={props.background}
          fontColor={props.fontColor}
          >
          {props.text}
        </SmallButton>
      )
    }

    if (props.size === 'medium') {
      return (
        <MediumButton
          background={props.background}
          fontColor={props.fontColor}
          >
          {props.text}
        </MediumButton>
      )
    }

    if (props.size === 'large') {
      return (
        <LargeButton
          background={props.background}
          fontColor={props.fontColor}
        >
          {props.text}
        </LargeButton>
      )
    }
  }

  return (
    <>
      <ButtonComponent />
    </>
  );
}

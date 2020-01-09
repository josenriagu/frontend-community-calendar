import styled, { css } from 'styled-components';

const Input = styled.input`
  background: #F1EDED;
  border: 0.5px solid #716969;
  border-radius: 5px;
  outline: none;
  padding: 0 .5rem;
  height: 3.3rem;
  font-size: 1.6rem;

  ${props => props.search && css`
    outline: 0;
    border: 0;
    border-bottom: 0.5px solid #716969;
    border-radius: 0;
    background: none;
    height: 1.5em;

    &:hover {
      box-shadow: none;
    }
  `}

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border-radius: 0;
    width: auto;
    height: auto;
    cursor: pointer;
    height: 1.2em;
    width: 1.2em;
    border: 1px solid black;

    :disabled {
      background-color: darkgrey;
    }
  }

  ${props => props.small && css`
    width: 6em;
  `}

  ${props => props.medium && css`
    width: 14em;
  `}

  ${props => props.large && css`
    width: 20em;
  `}

  ${props => props.disabled && css`
    background: #DDDDDD;
    cursor: not-allowed;
  `}
`;

export default Input;

import styled, { css } from 'styled-components';

const TextArea = styled.textarea`
  background: #F1EDED;
  border: 0.5px solid #716969;
  outline: none;
  padding: 0 .5rem;
  height: 3.3rem;
  font-size: 1.6rem;


  ${props => props.small
    && css`
      width: 6rem;
    `}

  ${props => props.medium
    && css`
      width: 11.5rem;
      border-radius: 20px;
    `}

  ${props => props.large
    && css`
      width: 40rem;
      height: 15rem;
      border-radius: 5px;
    `}

  ${props => props.xLarge
  && css`
    width: 25rem;
    border-radius: 20px;
  `}

  ${props => props.xxLarge
  && css`
    width: 40rem;
    background:none;
    border-radius: 20px;
  `}

  ${props => props.disabled
    && css`
      background: #dddddd;
      cursor: not-allowed;
    `}
`;

export default TextArea;

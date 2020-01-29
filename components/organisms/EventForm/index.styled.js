import styled, { css } from 'styled-components';


export const Form = styled.div`
width:800px;
display:flex;
 flex-direction:column;
 align-items:center;
`;

export const ContainerDiv = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  margin-left:40px;
  margin-bottom:10px;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;

  ${props => props.border
    && css`
      border: 0.5px solid #716969;
      border-top: 0.5px solid #716969;
      border-left: 1px solid #716969;
    `}

    ${props => props.margin
    && css`
      margin: 10px 0;
    `}

    ${props => props.padding
    && css`
      padding: 6px 0;
    `}

    ${props => props.round
    && css`
      border-radius: 5px;
    `}



`;

export const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Flex = styled.div`
    display:flex;

    ${props => props.justify
    && css`
      justify-content: ${props.justify};
    `}

    ${props => props.width
    && css`
      & > div {
          width: ${props.width}
      }
    `}
`;

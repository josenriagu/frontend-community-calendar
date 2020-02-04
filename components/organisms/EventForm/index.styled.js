import styled, { css } from 'styled-components';

import { screens } from '../../~reusables';


export const Form = styled.div`
width:800px;
display:flex;
 flex-direction:column;
 align-items:center;
 @media ${screens.tablet} {
    width: 700px;
  }
  @media ${screens.mobile} {
    width: 99.5%;
    margin:0;
  }
  @media ${screens.xmobile} {
    width: 100%;
    margin:0;
  }
`;

export const ContainerDiv = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;

  @media ${screens.mobile} {
    width: 100%;;
  }
  @media ${screens.xmobile} {
    width: 100%;
  } 
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

export const NavContainer = styled.div`
  width: 100%;
  margin: 0 0 0 30px;
  @media ${screens.tablet} {
    margin: 0 0 0 10px;
  }
  @media ${screens.mobile} {
    margin: 0 0 0 5px;
  }
  @media ${screens.xmobile} {
    margin: 0 0 0 1px;
  }
`;

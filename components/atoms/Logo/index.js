import styled, { css } from 'styled-components';

export const Logo = styled.div`
  background-image: url("/logo.png");
  width: ${props => props.width || '113px'};
  height: ${props => props.height || '58px'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  cursor: pointer;

  ${props => props.coloredLogo
    && css`
      background-image: url("comcalAlt.png");
    `}
`;

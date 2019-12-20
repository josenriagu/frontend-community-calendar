import styled, { css } from 'styled-components';
import logo from '../../assets/comcal-white.png';
import logoColored from '../../assets/comcal-colored.png';

export const Logo = styled.div`
  background-image: url(${logo});
  width: ${props => props.width || '113px'};
  height: ${props => props.height || '58px'};
  background-repeat: no-repeat;
  background-size: contain;
  
  ${props => props.coloredLogo && css`
    background-image: url(${logoColored});
  `}
`;

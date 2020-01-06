import styled, { css } from 'styled-components';

import logo from '../../assets/comcal.png';
import logoAlt from '../../assets/comcalAlt.png';

export const Logo = styled.div`
  background-image: url(${logo});
  width: ${props => props.width || '113px'};
  height: ${props => props.height || '58px'};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  
  ${props => props.coloredLogo && css`
    background-image: url(${logoAlt});
  `}
`;

import styled from 'styled-components';

import { colors, screens } from '../../~reusables';

export const NavBarDiv = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${screens.mobile} {
    padding: 1rem 0rem;
  }
  nav {
    width: 30%;
    display: flex;
    justify-content: space-around;
    @media ${screens.tablet} {
      width: 50%;
    }
    @media ${screens.mobile} {
      display: none;
    }
    button {
      font-weight: bold;
    }
  }
  span {
    display: none;
    @media ${screens.mobile} {
      display: block;
    }
    i {
      font-size: 2.4rem;
      color: ${colors.primary};
    }
  }
`;

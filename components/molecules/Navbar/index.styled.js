import styled from 'styled-components';

import { screens } from '../../~reusables';

export const NavBarDiv = styled.div`
  margin: 0 auto;
  padding: 1rem 2.5rem;
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
    @media ${screens.mobile} {
      width: 65%;
    }
  }
`;

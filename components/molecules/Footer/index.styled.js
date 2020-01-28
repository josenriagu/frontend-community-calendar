import styled from 'styled-components';

import { colors, screens } from '../../~reusables';

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5rem 3rem 2rem;
  background-color: ${colors.secondary};
  div#footerGroup {
    display: flex;
    justify-content: space-between;
    @media ${screens.mobile} {
      flex-wrap: wrap
    }
    div#col1 {
      width: 35%;
      @media ${screens.mobile} {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
    div#col2,
    div#col3,
    div#col4 {
      width: 22%;
      @media ${screens.mobile} {
        width: 31%
      }
    }
    div#col2 {
      display: flex;
      flex-direction: column;
    }
    h6, p {
      color: white;
    }
    h6 {
      margin-bottom: 2rem;
    }
    p {
      padding: .5rem 0;
    }
    a {
      margin: .5rem 0;
      color: white;
    }
  }
  div#socialIcons {
    width: 12.5%;
    margin: 2rem auto 0;
    display: flex;
    justify-content: space-between;
    span {
      img {
        width: 3rem;
        height: 3rem;
      }
    }
    @media ${screens.mobile} {
      width: 30%
    }
  }
`;

import styled from 'styled-components';

import { colors, screens } from '../../~reusables';

export const SearchBarDiv = styled.div`
  width: 60%;
  height: 6rem;
  margin: 0 auto;
  padding: .5rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: absolute;
  top: -3rem;
  left: 20%;
  right: 20%;
  transition: box-shadow 2s;
  border: .05rem solid ${colors.tertiary};
  border-radius: 7rem;
  @media ${screens.mobile} {
    width: 96%;
    left: 2%;
    right: 2%;
  };
  @media ${screens.xmobile} {
    width: 98%;
    left: 1%;
    right: 1%;
  };
  div#select {
    width: 90%;
    display: flex;
    align-items: center;
    @media ${screens.mobile} {
      width: 80%;
    };
    @media ${screens.xmobile} {
      width: 70%;
    };
    select {
      font-size: 1.6rem;
      border: none;
      max-width: calc(100% / 3);
      :focus {
        outline: none;
      }
      @media ${screens.mobile} {
        font-size: 1.4rem;
      }
    }
  }
  :hover {
    box-shadow: .5rem .5rem 1rem .3rem rgba(167, 167, 167, 1);
    border: none;
  }
`;

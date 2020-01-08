import styled from 'styled-components';

import { colors } from '../../~reusables';

export const SearchBarDiv = styled.div`
  width: calc(100% - 40%);
  margin: 0 auto;
  padding: .5rem 1rem;
  display: flex;
  justify-content: space-between;
  background: white;
  position: absolute;
  top: -2rem;
  left: 20%;
  right: 20%;
  transition: box-shadow 2s;
  border: .05rem solid ${colors.borderGray};
  input::placeholder {
    font-size: 1.6rem;
  }
  :hover {
    box-shadow: .5rem .5rem 1rem .3rem rgba(167, 167, 167, 1);
    border: none;
  }
`;

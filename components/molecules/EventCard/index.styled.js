import styled from 'styled-components';

import { colors } from '../../~reusables';

export const EventCardDiv = styled.div`
  width: 50%;
  cursor: pointer;
  display flex;
  justify-content: space-between;
  border: .05rem solid ${colors.borderGray};
  padding: .7rem 1rem .3rem;
  div#parent1 {
    display: flex;
  }
  div#sibling1 {
    margin-left: 1rem;
  }
  p {
    margin: .3rem 0;
  }
`;

export const EventCardAltDiv = styled.div`
  width: 50%;
  cursor: pointer;
  display flex;
  flex-direction: column;
  justify-content: space-between;
  border: .05rem solid ${colors.borderGray};
  padding: .7rem 1rem .3rem;
  p {
    font-size: 1rem;
  }
  div#topbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div#datetime {
      width: 40%;
      display: flex;
      justify-content: space-between;
    }
  }
  div#host {
    display: flex;
    align-items: center;
    margin-top: .5rem;
    div#imgHolder {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: gray;
    }
    div#details {
      margin-left: .5rem;
      display: flex;
      flex-direction: column;
      span:nth-child(2) {
        font-weight: bold;
      }
    }
  }
  div#actionIcons {
    width: 90%;
    margin-top: .5rem;
    display: flex;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      p {
        margin-left: .5rem;
      }
    }
  }
  div#description {
    margin-top: .5rem;
    p {
      margin: .8rem 0;
    }
    button {
      margin: 0 auto;
    }
  }
  div#button {
    margin: 0 auto;
    button {
      padding: .5rem;
      font-size: .9rem;
    }
  }
`;

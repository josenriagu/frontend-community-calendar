import styled from 'styled-components';

import { colors, screens } from '../../~reusables';

export const EventCardDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem;
  padding: 1.5rem 3rem 1rem;
  border: 0.05rem solid ${colors.tertiary};
  border-radius: 1.5rem;
  @media ${screens.tablet} {
    padding: 1.5rem 1.5rem 1rem;
  }
  @media ${screens.xmobile} {
    padding: 1.5rem 1rem 1rem;
  }
  div#parent1 {
    display: flex;
    width: 92.5%;
    @media ${screens.tablet} {
      width: 89%;
    }
    @media ${screens.mobile} {
      width: 87%;
    }
    @media ${screens.xmobile} {
      width: 85%;
    }
  }
  div#sibling1 {
    margin-left: 1rem;
  }
  p {
    margin: 0.3rem 0;
  }
  span#toggle {
    width: 7.5%;
    height: auto;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    i {
      color: ${colors.primary};
    }
    @media ${screens.tablet} {
      width: 11%;
    }
    @media ${screens.mobile} {
      width: 13%;
    }
    @media ${screens.xmobile} {
      width: 15%;
    }
  }
`;

export const EventCardAltDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 1rem;
  padding: 1.5rem 3rem 1rem;
  border: 0.05rem solid ${colors.tertiary};
  border-radius: 1.5rem;
  @media ${screens.tablet} {
    padding: 1.5rem 1.5rem 1rem;
  }
  @media ${screens.xmobile} {
    padding: 1.5rem 1rem 1rem;
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
    span#toggle {
      width: 7.5%;
      height: auto;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      i {
        color: ${colors.primary};
      }
      @media ${screens.tablet} {
        width: 10%;
      }
      @media ${screens.mobile} {
        width: 12%;
      }
      @media ${screens.xmobile} {
        width: 15%;
      }
    }
  }
  div#host {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    div#imgHolder {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      border: 0.1rem solid ${colors.tertiary};
      text-align: center;
      img {
        width: 80%;
        height: 80%;
      }
    }
    div#details {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      span:nth-child(2) {
        font-weight: bold;
      }
    }
  }
  div#actionIcons {
    width: 90%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      p {
        margin-left: 0.5rem;
      }
      i {
        color: ${colors.primary};
      }
    }
  }
  div#description {
    margin-top: 1rem;
    word-wrap: break-word;
    p {
      margin: 0.8rem 0;
    }
    button {
      margin: 0 auto;
    }
  }
  div#button {
    margin: 0 auto;
    button {
      font-size: 1.6rem;
    }
  }
`;

export const LoaderDiv = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem 0;
  padding: 3rem 5rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
`;

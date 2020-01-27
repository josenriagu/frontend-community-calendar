import styled from 'styled-components';

import { colors } from '../~reusables';

export const AppDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  div#wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  div#introSection {
    height: 80vh;
    background-image: url('/banner.jpg');
    /* background color is the fallback for when the image is not available */
    background-color: '#ffffff';
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    div#heading {
      text-align: center;
      margin: 2rem auto 0;
      width: 70%;
      height: 20vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        text-transform: uppercase;
        text-shadow: .3rem .3rem rgb(0, 0, 0, 0.8);
      }
    }
  }
  div#eventSection {
    width: 100%;
    padding: 6rem 3rem;
    position: relative;
    div#eventCal {
      display: flex;
      justify-content: space-between;
      padding-top: 5rem;
      div#eventsContainer {
      width: 62.5%;
      }
      div#calendar {
        width: 32.5%;
        height: 32.5rem;
        padding: .5rem;
        border: .1rem solid ${colors.tertiary};
        border-radius: 1.5rem;
      }
    }
  }
`;

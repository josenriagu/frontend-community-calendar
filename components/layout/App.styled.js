import styled from 'styled-components';

import { screens } from '../~reusables';

export const AppDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  div#wrapper {
    width: 1200px;
    @media ${screens.tablet} {
      width: 750px;
    }
    @media ${screens.mobile} {
      width: 450px;
    }
    @media ${screens.xmobile} {
      width: 300px;
    }
  }
  div#introSection {
    height: 80vh;
    display: flex;
    justify-content: center;
    background-image: url("/banner.jpg");
    /* background color is the fallback for when the image is not available */
    background-color: "#ffffff";
    background-attachment: fixed;
    background-position: 0% 90%;
    background-size: fill;
    background-repeat: no-repeat;
    overflow: hidden;
    @media ${screens.tablet} {
      background-position: 20% 90%;
    }
    @media ${screens.mobile} {
      background-position: 5% 90%;
    }
    div#heading {
      text-align: center;
      margin: 2rem auto 0;
      width: 80%;
      height: 40vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        text-transform: uppercase;
        text-shadow: 0.3rem 0.3rem rgb(0, 0, 0, 0.8);
      }
      @media ${screens.mobile} {
        width: 100%;
      }
    }
  }
  div#eventSection {
    padding: 3rem 3rem 6rem;
    position: relative;
    display: flex;
    justify-content: center;
    @media ${screens.xmobile} {
      padding: 3rem 1rem 6rem;
    }
    div#eventCal {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding-top: 3rem;
      @media ${screens.mobile} {
        flex-direction: column-reverse;
      }
      div#eventsContainer {
        width: 62.5%;
        @media ${screens.mobile} {
          width: 100%;
          margin: 2rem 0 0;
        }
      }
      div#desktopCal {
        width: 32.5%;
        @media ${screens.mobile} {
          display: none;
        }
      }
      div#mobileCal {
        display: none;
        @media ${screens.mobile} {
          display: block;
          width: 100%;
          margin-top: 2rem;
        }
      }
      div#switch {
        display: none;
        @media ${screens.mobile} {
          display: flex;
          align-items: center;
          h6 {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`;

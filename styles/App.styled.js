import styled from 'styled-components';

import { colors } from '../components/~reusables';

export const AppDiv = styled.div`
  width: 1000px;
  margin: 0 auto;
  div#introSection {
    height: 80vh;
    background: '#ffffff';
    background-image: url('/coverphoto.png');
    /* background color is the fallback for when the image is not available */
    background-color: '#ffffff';
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    div#heading {
      text-align: center;
      margin: 2rem 0 0;
      h3 {
        text-transform: uppercase;
        margin-top: 1rem;
      }
    }
  }
  div#eventSection {
    width: 100%;
    padding: 6rem 3rem;
    position: relative;
    div#eventsContainer {
      width: 70%;
    }
  }
  footer {
    width: 100%;
    padding: 5rem 3rem 2rem;
    background-color: ${colors.footer};
    div#footerGroup {
      display: flex;
      justify-content: space-between;
      div#col1 {
        width: 35%;
      }
      div#col2,
      div#col3,
      div#col4 {
        width: 22%;
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
  }
`;

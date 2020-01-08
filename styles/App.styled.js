import styled from 'styled-components';

export const AppDiv = styled.div`
  width: 100vw;
  margin: 0 auto;
  div#wrapper {
    width: 1200px;
    margin: 0 auto;
  }
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
      div#eventsContainer {
      width: 65%;
      }
      div#calendar {
        width: 300;
        border: .1rem solid gray;
      }
    }
  }
`;

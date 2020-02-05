import styled from 'styled-components';

export const BorderDiv = styled.div`
  width: 60vw;
  margin: 0 auto;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding-top: 2rem;
  line-height: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Montserrat", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  h2 {
    padding-left: 2rem;
  }
  @media (max-width: 1000px) {
    width: 100vw;
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;
export const TopSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 0.1rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  .imgHolder {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: gray;
  }
`;
export const UserBioDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 5rem;
  @media (max-width: 500px) {
    width: 70%;
    padding-left: 2rem;
  }
  .datelocation {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    p {
      padding-right: 3rem;
    }
  }
`;
export const BioDiv = styled.div`
  margin: 0 auto;
  margin-top: 0.5rem;
`;
export const InterestDiv = styled.div`
  margin: 0 auto;
  margin-top: 0.5rem;
  width: 25%;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const MidSectionDiv = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding-left: 5rem;
  }
`;
export const CardDiv = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  margin-top: 1rem;
  border: 1px solid #cec8c8;
  margin-right: 1rem;
  margin-left: 1rem;
  justify-content: space-between;
  border: 1px solid #cec8c8;
  border-radius: 0.5rem;
  @media (max-width: 500px) {
    width: 80%;
    justify-content: space-between;
    border: 1px solid #cec8c8;
    border-radius: 0.5rem;
  }
  h3,
  h4,
  p {
    padding: 0.5rem;
  }
  h6 {
    padding-right: 0.5rem;
    text-align: right;
  }
`;
export const BottomSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  h5 {
    text-align: center;
    color: #ce5374;
  }
`;
export const EventsDiv = styled.div`
  display: flex;
  flex-direction: row;
  h2 {
    padding-left: 14rem;
    color: #888888;
  }
`;

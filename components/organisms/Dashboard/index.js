import React from 'react';
import styled from 'styled-components';

// import GlobalStyle from '../../../styles/GlobalStyles';
import NavBar from '../../molecules/Navbar';

const Dashboard = () => (
  <>
    <NavBar />
    <BorderDiv>
      <TopSectionDiv>
        <img src="#" alt="star" class="dp"/>
        <UserBioDiv>
            <h3>Martin Twum Mensah</h3>
            <LocationDiv>
                            Location:
                            Accra, Ghana
            </LocationDiv>
            <DateDiv>
                            Member since:
                            Jan 20, 2020
            </DateDiv>
            <BioDiv>
                            Bio:
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BioDiv>
        </UserBioDiv>
        <InterestDiv>
                        Interests:
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
        </InterestDiv>
      </TopSectionDiv>
      <MidSectionDiv>
        <h2>Events interested</h2>
        <p>Starting Soon</p>
        <Card1Div>
          <h3>Event Title</h3>
          <h4>Accra</h4>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
          </p>
          <site>eventup.com</site>
        </Card1Div>
        <Card2Div>
          <h3>Event Title</h3>
          <h4>Accra</h4>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
          </p>
          <site>eventup.com</site>
        </Card2Div>
        <Card3Div>
          <h3>Event Title</h3>
          <h4>Accra</h4>
          <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
          </p>
          <site>eventup.com</site>
        </Card3Div>
      </MidSectionDiv>
      <BottomSectionDiv>
        <h4>Future events</h4>
        <h3>No future events</h3>
        <a href = "#">Add events</a>
      </BottomSectionDiv>
    </BorderDiv>
  </>
);

export default Dashboard;

const BorderDiv = styled.div`
  width: 60vw;
  height: 90vh;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding-top: 3rem;
`;
const TopSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
  height: 30vh;
  display: flex;
  flex-direction: row;
`;
const UserBioDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
const LocationDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
const DateDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
const BioDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
const InterestDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
const MidSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`;
const BottomSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
`;
const Card1Div = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
`;
const Card2Div = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
`;
const Card3Div = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
`;
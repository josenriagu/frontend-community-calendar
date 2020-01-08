/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';

import { AppDiv } from '../styles/App.styled';
import GlobalStyle from '../styles/GlobalStyles';
import NavBar from '../components/molecules/Navbar';
import SearchBar from '../components/molecules/Searchbar';
import EventCard from '../components/molecules/EventCard';
import Icon from '../components/atoms/Icon';
// import Heading from '../components/atoms/Heading';

import { doSignUp } from '../redux/actions/signUp';


const Home = () => (
  <>
    <GlobalStyle />
    <AppDiv>
      <div id="introSection">
        <NavBar />
        <div id="heading">
          <h3>find relevant community events</h3>
          <h3>around you</h3>
        </div>
      </div>
      <div id="eventSection">
        <SearchBar />
        <div id="eventsContainer">
          {
            ['1', '2', '3', '4', '5'].map(el => <EventCard key={el} />)
          }
        </div>
      </div>
      <footer>
        <div id="footerGroup">
          <div id="col1">
            <h3>ComCal</h3>
          </div>
          <div id="col2">
            <h6>Your Acount</h6>
            <a href="/signup">Sign Up</a>
            <a href="/login">Login</a>
            <a href="/create-event">Create Event</a>
          </div>
          <div id="col3">
            <h6>Use ComCal</h6>
            <p>How it Works</p>
            <p>Fun Facts</p>
            <p>FAQs</p>
          </div>
          <div id="col4">
            <h6>Find Events</h6>
            <p>Accra</p>
            <p>Lagos</p>
            <p>New York</p>
            <p>Lome</p>
            <p>All Communities</p>
          </div>
        </div>
        <div id="socialIcons">
          <Icon type="facebook" color="#ffffff" theme="filled" />
          <Icon type="instagram" color="#ffffff" theme="filled" />
          <Icon type="github" color="#ffffff" theme="filled" />
        </div>
      </footer>
    </AppDiv>
  </>
);

export default connect(
  state => state,
  { doSignUp },
)(Home);

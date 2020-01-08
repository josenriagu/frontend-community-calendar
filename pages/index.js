/* eslint-disable react/button-has-type */
import React from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
// import { Calendar } from 'antd';

import { AppDiv } from '../styles/App.styled';
import GlobalStyle from '../styles/GlobalStyles';
import NavBar from '../components/molecules/Navbar';
import SearchBar from '../components/molecules/Searchbar';
import EventCard from '../components/molecules/EventCard';
import AppFooter from '../components/molecules/Footer';

import { doSignUp } from '../redux/actions/signUp';


const Home = () => (
  <>
    <GlobalStyle />
    <Head>
      {/* Stylesheet links */}
      <link href="https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
    </Head>
    <AppDiv>
      <div id="introSection">
        <div id="wrapper">
          <NavBar />
          <div id="heading">
            <h3>find relevant community events</h3>
            <h3>around you</h3>
          </div>
        </div>
      </div>
      <div id="eventSection">
        <div id="wrapper">
          <SearchBar />
          <div id="eventCal">
            <div id="eventsContainer">
              {
                ['1', '2', '3', '4', '5'].map(el => <EventCard key={el} />)
              }
            </div>
            {/* <div id="calendar">
              <Calendar fullscreen={false} />
            </div> */}
          </div>
        </div>
      </div>
      <AppFooter />
    </AppDiv>
  </>
);

export default connect(
  state => state,
  { doSignUp },
)(Home);

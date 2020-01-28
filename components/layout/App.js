/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

import { AppDiv } from './App.styled';
import Heading from '../atoms/Heading';
import NavBar from '../molecules/Navbar';
import SearchBar from '../molecules/Searchbar';
import EventCard from '../molecules/EventCard';
import AppFooter from '../molecules/Footer';
import Loader from '../molecules/EventCard/Loader';
import Calendar from '../organisms/Calendar';
import Pagination from '../molecules/Pagination';
import UploadContainer from '../molecules/ImageUplaoder/index';

const App = ({ events, fetchEventsRequesting }) => (
  <AppDiv>
    <div id="introSection">
      <div id="wrapper">
        {Cookie.get('comcal-event-token') ? <NavBar alt logged /> : <NavBar alt notLogged />}
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
              (events.length <= 0 || fetchEventsRequesting)
                ? <Loader />
                : (!fetchEventsRequesting && typeof events === 'object' && events.length > 0)
                  ? <Pagination items={events} position="right" Component={EventCard} uniqueKey="scrapedEventId" perPage={5} />
                  : <Heading color="red">There are no events currently. Please try the search feature.</Heading>
            }
            <UploadContainer />
          </div>
          <Calendar />
        </div>
      </div>
    </div>
    <AppFooter />
  </AppDiv>
);

App.propTypes = {
  events: PropTypes.array,
  fetchEventsRequesting: PropTypes.bool,
};

const mapStateToProps = state => ({
  events: state.fetchEvents.events,
  fetchEventsRequesting: state.fetchEvents.requesting,
});

export default connect(mapStateToProps, {})(App);

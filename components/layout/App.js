import React from 'react';
import { connect } from 'react-redux';
import { Calendar } from 'antd';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';

import { AppDiv } from './App.styled';
import NavBar from '../molecules/Navbar';
import SearchBar from '../molecules/Searchbar';
import EventCard from '../molecules/EventCard';
import AppFooter from '../molecules/Footer';
import Loader from '../molecules/EventCard/Loader';

const App = ({ events }) => (
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
              events.length > 0
                ? events.map(el => <EventCard key={el.scrapedEventId} el={el} />)
                : <Loader />
            }
          </div>
          <div id="calendar">
            <Calendar fullscreen={false} />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </AppDiv>
);

App.propTypes = {
  events: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  events: state.fetchEvents.events,
});

export default connect(mapStateToProps, {})(App);

/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { Switch } from 'antd';

import { AppDiv } from './App.styled';
import Heading from '../atoms/Heading';
import NavBar from '../molecules/Navbar';
import SearchBar from '../molecules/Searchbar';
import EventCard from '../molecules/EventCard';
import AppFooter from '../molecules/Footer';
import Loader from '../molecules/EventCard/Loader';
import Calendar from '../organisms/Calendar';
import Pagination from '../molecules/Pagination';

function compare(a, b) {
  if (a.eventDate < b.eventDate) {
    return -1;
  }
  if (a.eventDate > b.eventDate) {
    return 1;
  }
  return 0;
}

const App = ({ events, fetchEventsRequesting }) => {
  const [calToggle, setCalToggle] = useState(false);
  if (events.length > 0)events.sort(compare);

  const toggleCal = () => setCalToggle(!calToggle);
  return (
    <AppDiv>
      <div id="introSection">
        <div id="wrapper">
          {Cookie.get('comcal-event-token') ? (
            <NavBar alt logged />
          ) : (
            <NavBar alt notLogged />
          )}
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
              {events.length <= 0 || fetchEventsRequesting ? (
                <Loader />
              ) : !fetchEventsRequesting
                && typeof events === 'object'
                && events.length > 0 ? (
                  <Pagination
                    items={events}
                    position="right"
                    Component={EventCard}
                    uniqueKey="scrapedEventId"
                    perPage={5}
                  />
                ) : (
                  <Heading color="red">
                  There are no events currently. Please try the search feature.
                  </Heading>
                )}
            </div>
            <div id="desktopCal">
              <Calendar />
            </div>
            {calToggle && <div id="mobileCal"><Calendar /></div>}
            <div id="switch">
              <h6>Calendar</h6>
              <Switch
                checkedChildren="Hide"
                unCheckedChildren="Show"
                onClick={toggleCal}
              />
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </AppDiv>
  );
};

App.propTypes = {
  events: PropTypes.array,
  fetchEventsRequesting: PropTypes.bool,
};

const mapStateToProps = state => ({
  events: state.fetchEvents.events,
  fetchEventsRequesting: state.fetchEvents.requesting,
});

export default connect(mapStateToProps, {})(App);

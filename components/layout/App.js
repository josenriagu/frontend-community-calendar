import React from 'react';

import { Calendar } from 'antd';
import { AppDiv } from './App.styled';
import NavBar from '../molecules/Navbar';
import SearchBar from '../molecules/Searchbar';
import EventCard from '../molecules/EventCard';
import AppFooter from '../molecules/Footer';

const App = () => (
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
          <div id="calendar">
            <Calendar fullscreen={false} />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </AppDiv>
);

export default App;

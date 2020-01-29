import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SearchBarDiv } from './index.styled';
import Interests from '../../atoms/Interests';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';
import { doFetchEvent } from '../../../redux/actions/events';

const SearchBar = ({ doFetchEvent }) => {
  const [location, setLocation] = useState({ country: '', city: '' });
  const [interest, setInterest] = useState('all');

  const selectCountry = val => setLocation({ ...location, country: val });
  const selectRegion = val => setLocation({ ...location, city: val });
  const handleClick = () => {
    const sendCountry = location.country.toLowerCase().replace(' ', '-');
    const sendCity = location.city === 'Abuja Federal Capital Territory'
      ? 'abuja'
      : location.city.toLowerCase().replace(' ', '-');
    localStorage.setItem('userSearchCountry', sendCountry);
    localStorage.setItem('userSearchCity', sendCity);
    localStorage.setItem('userEventType', interest);
    doFetchEvent(sendCountry, sendCity, interest);
  };

  return (
    <SearchBarDiv>
      <div id="select">
        <Interests interest={interest} setInterest={setInterest} />
        <CountryDropdown
          value={location.country}
          onChange={val => selectCountry(val)}
        />
        <RegionDropdown
          value={location.city}
          country={location.country}
          onChange={val => selectRegion(val)}
          style={{
            display: `${location.country ? 'block' : 'none'}`,
          }}
        />
      </div>
      <Button
        medium
        background={colors.primary}
        disabled={location.country.length <= 0 && location.city.length <= 0}
        onClick={() => handleClick()}
      >
          Search
      </Button>
    </SearchBarDiv>
  );
};

SearchBar.propTypes = {
  doFetchEvent: PropTypes.func.isRequired,
};

export default connect(state => state, { doFetchEvent })(SearchBar);

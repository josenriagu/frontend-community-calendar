import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import { SearchBarDiv } from './index.styled';
import Interests from '../../atoms/Interests';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';

const SearchBar = () => {
  const [location, setLocation] = useState({ country: '', region: '..select a country first' });

  const selectCountry = (val) => setLocation({ ...location, country: val });
  const selectRegion = (val) => setLocation({ ...location, region: val });

  return (
    <>
      <SearchBarDiv>
        {/* <Input search type="text" placeholder="I want events in" /> */}
        <Interests />
        <div>
          <CountryDropdown
            value={location.country}
            onChange={(val) => selectCountry(val)}
            style={{
              border: 'none',
              fontSize: '15pt',
              maxWidth: '200px',
            }}
          />
        </div>
        <div>
          <RegionDropdown
            value={location.region}
            country={location.country}
            onChange={(val) => selectRegion(val)}
            style={{
              border: 'none',
              display: `${location.country ? 'block' : 'none'}`,
              fontSize: '15pt',
              maxWidth: '200px',
            }}
          />
        </div>
        <Button medium background={colors.primary}>Search</Button>
      </SearchBarDiv>
    </>
  );
};

export default SearchBar;

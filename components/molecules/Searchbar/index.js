import React from 'react';

import { SearchBarDiv } from './index.styled';
import Input from '../../atoms/Input';
import { Button } from '../../atoms/Button';

const SearchBar = () => (
  <SearchBarDiv>
    <Input search type="text" placeholder="I want events in" />
    <div>
      <Input search type="options" placeholder="Happening on          " />
      <i className=" fas fa-chevron-down" />
    </div>
    <Button medium>Search</Button>
  </SearchBarDiv>
);

export default SearchBar;

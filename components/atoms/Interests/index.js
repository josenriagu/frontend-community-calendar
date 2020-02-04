import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export default function InterestSelect({ interest, setInterest }) {
  return (
    <Select
      value={interest}
      onChange={e => {
        setInterest(e.target.value);
      }}
      placeholder="Select Interest"
    >
      <option value="all">All Events</option>
      <option value="science-and-tech">Science and Technology</option>
      <option value="business">Business</option>
      <option value="music">Music</option>
      <option value="film-and-media">Film and Media</option>
      <option value="arts">Arts</option>
      <option value="fashion">Fashion</option>
      <option value="health">Health</option>
      <option value="sports-and-fitness">Sports and Fitness</option>
      <option value="travel-and-outdoor">Travel and Outdoor</option>
      <option value="food-and-drink">Food and Drink</option>
      <option value="charity-and-causes">Charity and Causes</option>
      <option value="government">Government</option>
      <option value="community">Community</option>
      <option value="spirituality">Spirituality</option>
      <option value="family-and-education">Family and Education</option>
      <option value="holiday">Holiday</option>
      <option value="home-and-lifestyle">Home and Lifestyle</option>
      <option value="auto-boat-and-air">Cars, Boats and Air</option>
      <option value="hobbies">Hobbies</option>
      <option value="school-activities">School Activities</option>
      <option value="other">Other</option>
    </Select>
  );
}

const Select = styled.select`
  outline: 0;
  border: none;

  ${props => props.small
    && css`
      width: 6rem;
    `}

  ${props => props.medium
    && css`
      width: 16.5rem;
      border-radius: 5px;
    `}

  ${props => props.large
    && css`
      width: 20rem;
    `}

  ${props => props.xLarge
  && css`
    width: 25rem;
    border-radius: 5px;
  `}

  ${props => props.xxLarge
  && css`
    width: 40rem;
    background:none;
    border-radius: 5px;
  `}

  ${props => props.disabled
    && css`
      background: #dddddd;
      cursor: not-allowed;
    `}

    ${props => props.noBackground
    && css`
      background: none;
    `}
`;


InterestSelect.propTypes = {
  setInterest: PropTypes.func.isRequired,
  interest: PropTypes.string.isRequired,
};

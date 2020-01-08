import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon';
import { EventCardDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMin = ({ toggle }) => (
  <EventCardDiv onClick={toggle}>
    <div id="parent1">
      <div><p>10:00AM</p></div>
      <div id="sibling1">
        <h6>Event Title</h6>
        <p>Some subtitle</p>
        <p>Virginia, US</p>
      </div>
    </div>
    <span>
      <Icon type="star" color={colors.secondary} />
    </span>
  </EventCardDiv>
);

EventCardMin.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default EventCardMin;

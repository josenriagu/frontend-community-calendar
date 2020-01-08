import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Heading';
import Icon from '../../atoms/Icon';
import { EventCardDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMin = ({ toggle }) => (
  <EventCardDiv onClick={toggle}>
    <div id="parent1">
      <div><p>10:00AM</p></div>
      <div id="sibling1">
        <Heading weight="bold" level={2}>Lorem Ipsum</Heading>
        <p>Lorem Ipsum Dolor Sit Amet</p>
        <p>Location, region</p>
      </div>
    </div>
    <div>
      <Icon type="star" color={colors.secondary} />
    </div>
  </EventCardDiv>
);

EventCardMin.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default EventCardMin;

import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../atoms/Heading';
import { Button } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { EventCardAltDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMax = ({ toggle }) => (
  <EventCardAltDiv onClick={toggle}>
    <div id="topbar">
      <div id="datetime">
        <span>10:00AM</span>
        <span>10 February, 2020</span>
      </div>
      <span><Icon type="star" color={colors.secondary} /></span>
    </div>
    <Heading weight="bold" level={2}>Lorem Ipsum</Heading>
    <div id="host">
      <div id="imgHolder">
        {/* <img src="#" alt="star" /> */}
      </div>
      <div id="details">
        <span>Host</span>
        <span>Josemaria and 3 others</span>
      </div>
    </div>
    <div id="actionIcons">
      <span>
        <Icon type="environment" color={colors.secondary} />
        <p>Hotspot</p>
      </span>
      <span>
        <Icon type="idcard" color={colors.secondary} />
        <p>2.3k going</p>
      </span>
      <span>
        <Icon type="idcard" color={colors.secondary} />
        <p>Free entry</p>
      </span>
      <span>
        <Icon type="idcard" color={colors.secondary} />
        <p>Share</p>
      </span>
    </div>
    <div id="description">
      <Heading weight="bold" level={3}>Description</Heading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div id="button">
      <Button medium>Attend Event</Button>
    </div>
  </EventCardAltDiv>
);

EventCardMax.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default EventCardMax;
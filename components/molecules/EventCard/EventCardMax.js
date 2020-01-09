import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { EventCardAltDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMax = ({ toggle }) => (
  <EventCardAltDiv>
    <div id="topbar">
      <div id="datetime">
        <span>10:00AM</span>
        <span>10 February, 2020</span>
      </div>
      <span id="toggle">
        <i onClick={toggle} className=" fas fa-chevron-up" />
        <Icon type="star" color={colors.primary} />
      </span>
    </div>
    <h6>Event Title</h6>
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
        <Icon type="environment" color={colors.primary} />
        <p>Virginia, US</p>
      </span>
      <span>
        <Icon type="idcard" color={colors.primary} />
        <p>2.3k going</p>
      </span>
      <span>
        <Icon type="idcard" color={colors.primary} />
        <p>Free entry</p>
      </span>
      <span>
        <Icon type="idcard" color={colors.primary} />
        <p>Share</p>
      </span>
    </div>
    <div id="description">
      <p><strong>Description</strong></p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div id="button">
      <Button medium background={colors.primary}>Attend Event</Button>
    </div>
  </EventCardAltDiv>
);

EventCardMax.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default EventCardMax;

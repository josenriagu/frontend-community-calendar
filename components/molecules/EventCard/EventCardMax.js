/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { EventCardAltDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMax = ({ toggle, el }) => {
  const dateTimeArr = el.eventDate.split('+')[0].split(',');
  function pushLink(e, link) {
    e.preventDefault();
    window.location.href = link;
  }

  return (
    <EventCardAltDiv>
      <div id="topbar">
        <div id="datetime">
          <span>{dateTimeArr[2]}</span>
          <span>{`${dateTimeArr[0]}, ${dateTimeArr[1]}, ${new Date().getFullYear()}`}</span>
        </div>
        <span id="toggle">
          <i onClick={toggle} className=" fas fa-chevron-up" />
          <Icon type="star" color={colors.primary} />
        </span>
      </div>
      <h6>{el.name.includes('-') ? el.name.split('-')[1] : el.name}</h6>
      <div id="host">
        <div id="imgHolder">
          {/* <img src={el.imageUrl} alt="star" /> */}
        </div>
        <div id="details">
          <span>Host</span>
          <span>Josemaria and 3 others</span>
        </div>
      </div>
      <div id="actionIcons">
        <span>
          <Icon type="environment" color={colors.primary} />
          {el.location && <p>{el.location.split('•')[1]}</p>}
        </span>
        <span>
          <Icon type="idcard" color={colors.primary} />
          <p>2.3k going</p>
        </span>
        <span>
          <Icon type="idcard" color={colors.primary} />
          <p>{el.price ? el.price : 'Not stated'}</p>
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
      <div onClick={(e) => pushLink(e, el.scrapedEventLink)} id="button">
        <Button medium background={colors.primary}>Attend Event</Button>
      </div>
    </EventCardAltDiv>
  );
};

EventCardMax.propTypes = {
  toggle: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
};

export default EventCardMax;

import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon';
import { EventCardDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMin = ({ toggle, el }) => {
  // eslint-disable-next-line no-param-reassign
  el.source = 'EventBrite';
  return (
    <EventCardDiv>
      <div id="parent1">
        <div><p>{el.eventDate.split('+')[0].split(',')[2]}</p></div>
        <div id="sibling1">
          <h6>{el.name.includes('-') ? el.name.split('-')[0] : el.name}</h6>
          <p>{`Source: ${el.source}`}</p>
          {el.location && <p>{el.location.split('•')[1]}</p>}
        </div>
      </div>
      <span id="toggle">
        <i onClick={toggle} className=" fas fa-chevron-down" />
        <Icon type="star" color={colors.primary} />
      </span>
    </EventCardDiv>
  );
};

EventCardMin.propTypes = {
  toggle: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.array.isRequired,
};

export default EventCardMin;

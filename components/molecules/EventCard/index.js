import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EventCardMin from './EventCardMin';
import EventCardMax from './EventCardMax';

const EventCard = ({ el }) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    isToggled === true ? <EventCardMax toggle={toggle} el={el} /> : <EventCardMin toggle={toggle} el={el} />
  );
};

EventCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
};

export default EventCard;

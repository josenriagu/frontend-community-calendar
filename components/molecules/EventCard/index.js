import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EventCardMin from './EventCardMin';
import EventCardMax from './EventCardMax';

const EventCard = ({ el }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [description, setDescription] = useState('');
  const [isFav, setIsFav] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const setFav = () => {
    setIsFav(!isFav);
  };

  return (
    isToggled === true ? <EventCardMax description={description} toggle={toggle} setFav={setFav} isFav={isFav} el={el} /> : <EventCardMin setDescription={setDescription} toggle={toggle} setFav={setFav} isFav={isFav} el={el} />
  );
};

EventCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
};

export default EventCard;

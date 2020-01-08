import React, { useState } from 'react';

import EventCardMin from './EventCardMin';
import EventCardMax from './EventCardMax';

const EventCard = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    isToggled === true ? <EventCardMax toggle={toggle} /> : <EventCardMin toggle={toggle} />
  );
};


export default EventCard;

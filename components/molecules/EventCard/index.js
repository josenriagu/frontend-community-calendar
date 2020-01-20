/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Auth } from '../../../config/auth';
import EventCardMin from './EventCardMin';
import EventCardMax from './EventCardMax';
import { addFavorite, removeFavorite } from '../../../redux/actions/favorite';


// eslint-disable-next-line no-shadow
const EventCard = ({ el, addFavorite, removeFavorite }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [description, setDescription] = useState('');
  const [isFav, setIsFav] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  const setFav = async () => {
    if (!Auth.getId()) {
      // eslint-disable-next-line no-alert
      alert('You must be logged in to perform this operation');
      Router.push('/signin');
    }
    if (!isFav) {
      await addFavorite(el.scrapedEventId, Auth.getId());
      setIsFav(!isFav);
    }
    if (isFav) {
      await removeFavorite(el.scrapedEventId, Auth.getId());
      setIsFav(!isFav);
    }
  };

  return (
    isToggled === true ? <EventCardMax description={description} toggle={toggle} setFav={setFav} isFav={isFav} el={el} /> : <EventCardMin setDescription={setDescription} toggle={toggle} setFav={setFav} isFav={isFav} el={el} />
  );
};

EventCard.propTypes = {
  el: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default connect(
  state => state,
  { addFavorite, removeFavorite },
)(EventCard);

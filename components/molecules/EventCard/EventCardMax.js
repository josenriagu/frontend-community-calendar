/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon as AntIcon } from 'antd';

import { Button } from '../../atoms/Button';
import { EventCardAltDiv } from './index.styled';
import { colors } from '../../~reusables';
import Icon from '../../atoms/Icon';
import Loader from './Loader';

const EventCardMax = ({ toggle, setFav, isFav, el, description }) => {
  const dateTimeArr = el.eventDate.split('+')[0].split(',');

  function pushLink(e, link) {
    e.preventDefault();
    window.location.href = link;
  }

  const initialDescription = el.name;
  const finalDescription = initialDescription.replace(/ /g, '%20');
  const shareLink = `https://twitter.com/intent/tweet?url=&text=${finalDescription}%20${el.scrapedEventLink}%2F%20`;

  return (
    <EventCardAltDiv>
      <div id="topbar">
        <div id="datetime">
          <span>{dateTimeArr[2]}</span>
          <span>{`${dateTimeArr[0]}, ${dateTimeArr[1]}, ${new Date().getFullYear()}`}</span>
        </div>
        <span id="toggle">
          <i onClick={() => { toggle(); }} className=" fas fa-chevron-up" />
          {
            isFav ? <i onClick={() => { setFav(); }} className="fas fa-star"></i> : <i onClick={() => { setFav(); }} className="far fa-star"></i>
          }
        </span>
      </div>
      <h6>{el.name.includes('-') ? el.name.split('-')[1] : el.name}</h6>
      <div id="host">
        <div id="imgHolder">
          <img src="/user.png" alt="star" />
        </div>
        <div id="details">
          <span>Host</span>
          <span>Josemaria and 3 others</span>
        </div>
      </div>
      <div id="actionIcons">
        <span>
          <i className="fas fa-map-marker-alt"></i>
          {el.location && <p>{el.location.split('•')[1]}</p>}
        </span>
        <span>
          <i className="fas fa-users"></i>
          <p>2.3k going</p>
        </span>
        <span>
          <i className="fas fa-money-bill-alt"></i>
          <p>{el.price ? el.price : 'Not stated'}</p>
        </span>
        <span>
          <AntIcon type="twitter" color={colors.primary} />
          <p><a style={{ color: 'rgba(0,0,0,0.65)' }} href={shareLink} target="_blank" rel="noreferrer noopener">Share</a></p>
        </span>
      </div>
      <div id="description">
        <p><strong>Description</strong></p>
        <p>
          {description.length < 5 ? <Loader /> : description}
        </p>
      </div>
      <div onClick={(e) => pushLink(e, el.scrapedEventLink)} id="button">
        <Button medium background={colors.primary}>Visit Source</Button>
      </div>
    </EventCardAltDiv>
  );
};

EventCardMax.propTypes = {
  toggle: PropTypes.func.isRequired,
  setFav: PropTypes.func.isRequired,
  isFav: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCardMax;

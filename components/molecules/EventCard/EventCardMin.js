/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { EventCardDiv } from './index.styled';

const EventCardMin = ({ toggle, setFav, isFav, el, setDescription }) => {
  // eslint-disable-next-line no-param-reassign
  const getDescription = async (link, id) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          link,
          eventId: id,
        }),
      };

      fetch('https://comcalstaging.herokuapp.com/api/v1/event/fetch-description', config)
        .then(res => res.json())
        .then(data => {
          setDescription(data);
        })
        .catch(() => 'Description unavailable');
    } catch (error) {
      return ('Description unavailable');
    }
  };

  return (
    <EventCardDiv>
      <div id="parent1">
        <div><p>{moment(el.eventDate).format('LT')}</p></div>
        <div id="sibling1">
          <h6>{el.name !== undefined && el.name.includes('-') ? el.name.split('-')[0] : el.name}</h6>
          <p style={{ textTransform: 'capitalize' }}>{`Source: ${el.source}`}</p>
          {el.location && <p>{el.location.split('•')[1]}</p>}
        </div>
      </div>
      <span id="toggle">
        <i onClick={() => { toggle(); getDescription(el.scrapedEventLink, el.scrapedEventId); }} className=" fas fa-chevron-down" />
        {
          isFav ? <i onClick={() => { setFav(); }} className="fas fa-star"></i> : <i onClick={() => { setFav(); }} className="far fa-star"></i>
        }
      </span>
    </EventCardDiv>
  );
};

EventCardMin.propTypes = {
  toggle: PropTypes.func.isRequired,
  setFav: PropTypes.func.isRequired,
  isFav: PropTypes.bool.isRequired,
  setDescription: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
};

export default EventCardMin;

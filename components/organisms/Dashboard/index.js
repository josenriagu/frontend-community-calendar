import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';



import NavBarDashboard from '../../molecules/NavbarDashboard';
import * as Styles from './index.styled';
import { doFetchFavEvents } from '../../../redux/actions/events';

const Dashboard = ({ user }) => {
  const [favoriteEvent, setFavoriteEvent] = useState([]);

  const id = user.user._id;

  useEffect(() => {
    const url = `https://comcalstaging.herokuapp.com/api/v1/favorite?userId=${id}`;
    axios.get(url)
      .then(res => {
        setFavoriteEvent(res.data.result);
      })
      .catch(err => {
        message.error(err.message || 'Error: Could not your favourite events')
      });
  }, [id]);

  return (
    <>
      <NavBarDashboard />
      <Styles.BorderDiv>
        <Styles.TopSectionDiv>
          <div className="imgHolder" />
          <Styles.UserBioDiv>
            <div className="datelocation">
              <p>
                <strong>Location:</strong>
                <br />
                Accra, Ghana
              </p>
              <p>
                <strong>Member since:</strong>
                <br />
                Jan 20, 2020
              </p>
            </div>
          </Styles.UserBioDiv>
          <Styles.InterestDiv>
            <h4>Interests:</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Styles.InterestDiv>
        </Styles.TopSectionDiv>
        <br />
        <h2>Favorite Events</h2>
        <Styles.MidSectionDiv>
          <p>Starting soon</p>
          {favoriteEvent.map(
            event => event && (
            <Styles.CardDiv key={event._id}>
              <h3>{event.name}</h3>
              <h4>{event.location}</h4>
              <p>{event.description}</p>
              <h6>{event.source}</h6>
            </Styles.CardDiv>
            ),
          )}
        </Styles.MidSectionDiv>
        <Styles.BottomSectionDiv>
          <Styles.EventsDiv>
            <h4>Created Events</h4>
            <h2>No created events!</h2>
          </Styles.EventsDiv>
          <h5>Add events</h5>
        </Styles.BottomSectionDiv>
      </Styles.BorderDiv>
    </>
  );
};

Dashboard.propTypes = {
  user: PropTypes.object,
  favEvents: PropTypes.array,
  doFetchFavEvents: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  favEvents: state.fetchEvents.favEvents.events,
});

export default connect(mapStateToProps, {})(Dashboard);

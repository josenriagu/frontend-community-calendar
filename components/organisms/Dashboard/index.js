import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBarDashboard from '../../molecules/NavbarDashboard';
import * as Styles from './index.styled';

const Dashboard = ({ user }) => {
  const [favoriteEvent, setFavoriteEvent] = useState([]);
  const id = user.user._id;

  axios
    .get(`https://comcalstaging.herokuapp.com/api/v1/favorite?userId=${id}`)
    .then(res => {
      setFavoriteEvent(res.data.favEvents);
    });

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
                {' '}
                <br />
                Accra, Ghana
              </p>
              <date>
                <strong>Member since:</strong>
                {' '}
                <br />
                Jan 20, 2020
              </date>
            </div>
            {/* <Styles.BioDiv>
              <h4>Bio:</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Styles.BioDiv> */}
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
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps, {})(Dashboard);

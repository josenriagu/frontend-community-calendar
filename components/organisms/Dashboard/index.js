import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import NavBarDashboard from '../../molecules/NavbarDashboard';
import * as Styles from './index.styled';

const Dashboard = ({ user }) => {
  const [favoriteEvent, setFavoriteEvent] = useState([]);
  const [userEvents, setUserEvents] = useState([]);

  const id = user.user._id;

  useEffect(() => {
    const url = `https://comcalstaging.herokuapp.com/api/v1/favorite?userId=${id}`;
    const eventsURL = `https://comcalstaging.herokuapp.com/api/v1/event/get-event/${id}`;

    axios.get(url)
      .then(res => {
        setFavoriteEvent(res.data.result);
      })
      .catch(err => {
        message.error(err.message || 'Error: Could not your faourite events');
      });

    axios.post(eventsURL)
      .then(res => {
        setUserEvents(res.data);
      })
      .catch(err => {
        message.error(err.message || 'Error: Could not your faourite events');
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
              <strong>Member since:</strong>
              <br />
              Jan 20, 2020
            </div>
            <Styles.BioDiv>
              <h4>Bio:</h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Styles.BioDiv>
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
            <Styles.Card1Div key={event._id}>
              <h3>{event.name}</h3>
              <h4>{event.location}</h4>
              <p>{event.description}</p>
              <h6>{event.source}</h6>
            </Styles.Card1Div>
            ),
          )}
        </Styles.MidSectionDiv>

        <Styles.MidSectionDiv>
          <p>My Events</p>


          {userEvents.map(
            event => event && (
            <Styles.Card1Div key={event._id}>
              <h3>{event.name}</h3>
              <h4>{event.location}</h4>
              <p>{event.description}</p>
              <h6>{event.source}</h6>
            </Styles.Card1Div>
            ),
          )}
        </Styles.MidSectionDiv>

        <Styles.BottomSectionDiv>
          <Styles.EventsDiv>
            <h4>Future events</h4>
            <h2>No future events!</h2>
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

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, {})(Dashboard);


// { /* <Styles.DateTimeDiv>
//         <Styles.StartDiv>
//           <p>Starts:</p>
//           <br />
//           <Input medium type="date" name="date" value="date" />
//           <Input small type="time" name="time" value="time" />
//         </Styles.StartDiv>
//         <Styles.EndDiv>
//           <p>Ends:</p>
//           <br />
//           <Input medium type="date" name="date" value="date" />
//           <Input small type="time" name="time" value="time" />
//         </Styles.EndDiv>
//       </Styles.DateTimeDiv> */ }

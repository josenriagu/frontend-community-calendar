import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from 'axios';
import fetch from 'isomorphic-fetch';

import GlobalStyle from '../styles/GlobalStyles';
// import App from '../components/layout/App';
import DateRange from '../components/molecules/DateTime/datetime';

import { doSignUp } from '../redux/actions/signUp';
import { doFetchEvent } from '../redux/actions/events';

const Home = ({ doFetchEvent }) => {
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        doFetchEvent(data.country_name.replace(' ', '-').toLowerCase(), data.city.replace(' ', '-').toLowerCase(), 'all');
        if (data.city !== undefined) {
          localStorage.setItem('userCity', data.city.replace(' ', '-').toLowerCase());
        }
        if (data.country_name !== undefined) {
          localStorage.setItem('userCountry', data.country_name.replace(' ', '-').toLowerCase());
        }
      })
      .catch(error => error);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Stylesheet links */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
      </Head>
      {/* <App /> */}
      <DateRange />
    </>
  );
};

// eslint-disable-next-line no-unused-vars
Home.getInitialProps = async ctx => {
  let city;
  let country;
  await axios.get('https://ipapi.co/json/')
    .then(({ data }) => {
      if (data) {
        city = data.city.toLowerCase().replace(' ', '-');
        country = data.country_name.toLowerCase().replace(' ', '-');
      } else throw new Error('an error occurred');
    })
    // eslint-disable-next-line no-console
    .catch(error => error);
  return { city, country };
};

Home.propTypes = {
  doFetchEvent: PropTypes.func,
};

export default connect(
  state => state,
  { doSignUp, doFetchEvent },
)(Home);

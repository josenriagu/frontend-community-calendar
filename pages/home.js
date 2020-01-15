/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from 'axios';

import GlobalStyle from '../styles/GlobalStyles';
import App from '../components/layout/App';

import { doSignUp } from '../redux/actions/signUp';
import { doFetchEvent } from '../redux/actions/events';

// eslint-disable-next-line no-shadow
const Home = ({ doFetchEvent }) => {
  let city;
  let country;
  useEffect(() => {
    async function fetchData() {
      console.log('here at browser');
      await axios.get('https://ipapi.co/json/')
        .then(({ data }) => {
          if (data) {
            city = data.city.toLowerCase();
            country = data.country_name.toLowerCase();
          } else throw new Error();
        })
        // eslint-disable-next-line no-console
        .catch(error => console.log(error));
    // return { city, country };
    }
    fetchData();
    doFetchEvent(country, city, 'all');
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Stylesheet links */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
      </Head>
      <App />
    </>
  );
};

Home.propTypes = {
  doFetchEvent: PropTypes.func.isRequired,
};

export default connect(
  state => state,
  { doSignUp, doFetchEvent },
)(Home);

import React from 'react';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyles';
import App from '../components/layout/App';

const Home = () => (

  <>
    <GlobalStyle />
    <Head>
      {/* Stylesheet links */}
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
        crossOrigin="anonymous"
      />
    </Head>
    <App />

  </>
);

export default Home;

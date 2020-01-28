import React from 'react';

import { Footer } from './index.styled';
import { handles } from './social';

const AppFooter = () => {
  const year = new Date().getFullYear();

  return (
    <Footer>
      <div id="wrapper">
        <div id="footerGroup">
          <div id="col1">
            <h3>ComCal</h3>
          </div>
          <div id="col2">
            <h6>Your Acount</h6>
            <a href="/signup">Sign Up</a>
            <a href="/login">Login</a>
            <a href="/create-event">Create Event</a>
          </div>
          <div id="col3">
            <h6>Use ComCal</h6>
            <p>How it Works</p>
            <p>Fun Facts</p>
            <p>FAQs</p>
          </div>
          <div id="col4">
            <h6>Find Events</h6>
            <p>Accra</p>
            <p>Lagos</p>
            <p>New York</p>
            <p>Lome</p>
            <p>All Communities</p>
          </div>
        </div>
        <div id="socialIcons">
          {
          handles.map(handle => <span key={handle.alt}><a href={handle.href} target="_blank" rel="noopener noreferrer"><img src={handle.src} alt={handle.alt} /></a></span>)
        }
        </div>
        <div id="copyright">
          <p>
            &copy;
            {' '}
            {year}
            {' '}
            Community Calendar. Some rights reserved
            {' '}
            <span role="img" aria-label="blush heart">🥰</span>
          </p>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;

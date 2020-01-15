/* eslint-disable no-console */
import React from 'react';

const Main = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/home';
    console.log('done');
  }
  return (
    <>
    </>
  );
};

export default Main;

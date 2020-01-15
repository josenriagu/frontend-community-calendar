import React from 'react';

const Main = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/home';
  }
  return (
    <>
    </>
  );
};

export default Main;

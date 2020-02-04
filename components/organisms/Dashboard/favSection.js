import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';


// eslint-disable-next-line react/prop-types
export default ({ user }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(6);
  const chevronWidth = 40;


  const mediaQueryChanged = () => setNumberOfCards(2);


  let mql;
  // eslint-disable-next-line react/prop-types
  const id = user.user._id;

  useEffect(() => {
    /* window.matchMedia should be placed in use efect see ->
  https://stackoverflow.com/questions/55151041/window-is-not-defined-in-nextjs-react-app
   */

    mql = window.matchMedia('(min-width: 600px)');

    mql.addListener(mediaQueryChanged);

    // Clean listener.
    return () => {
      mql.removeListener(mediaQueryChanged);
    };
  }, [id]);

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        leftChevron={<button type="button">{'<'}</button>}
        rightChevron={<button type="button">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{ height: 200, width: 400, background: '#EEE' }}>First card</div>
        <div style={{ height: 200, width: 400, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, width: 400, background: '#EEE' }}>Third card</div>
        <div style={{ height: 200, width: 400, background: '#EEE' }}>Fourth card</div>
      </ItemsCarousel>
    </div>
  );
};

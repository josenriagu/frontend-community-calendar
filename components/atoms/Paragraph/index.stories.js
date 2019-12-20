import React from 'react';

import Paragraph from '.';

export default {
  title: 'Paragraph',
};

export const regularParagraph = () => <Paragraph>Regular paragraph</Paragraph>;
export const customParagraph = () => <Paragraph fontSize="1.5em">Regular paragraph</Paragraph>;
export const coloredParagraph = () => <Paragraph color="blue">Regular paragraph</Paragraph>;

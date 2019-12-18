import React from 'react';

import Heading from '.';

export default {
  title: 'Heading',
};

export const h1Heading = () => <Heading>Heading 1</Heading>;
export const h1HeadingBold = () => <Heading weight="bold">Heading 1</Heading>;
export const h1HeadingColor = () => <Heading color="red">Heading 1</Heading>;
export const h2Heading = () => <Heading level={2}>Heading 2</Heading>;
export const h3Heading = () => <Heading level={3}>Heading 3</Heading>;
export const h4Heading = () => <Heading level={4}>Heading 4</Heading>;
export const h5Heading = () => <Heading level={5}>Heading 5</Heading>;
export const h6Heading = () => <Heading level={6}>Heading 6</Heading>;

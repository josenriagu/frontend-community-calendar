import React from 'react';

import Label from '.';

export default {
  title: 'Label',
};

export const regularLabel = () => <Label>Name</Label>;
export const labelWithFontSize = () => <Label fontSize="0.8em">Name</Label>;
export const coloredLabel = () => <Label color="blue">Name</Label>;

import React from 'react';

import Input from '.';

export default {
  title: 'Input Field',
};

export const inputRegular = () => <Input />;
export const inputSmall = () => <Input small />;
export const inputMedium = () => <Input medium />;
export const inputLarge = () => <Input large />;
export const inputRadio = () => <Input type="radio" />;
export const inputCheckbox = () => <Input type="checkbox" />;
export const inputDisabled = () => <Input disabled />;
export const inputSearch = () => <Input search />;
export const inputSearchLarge = () => <Input search large />;

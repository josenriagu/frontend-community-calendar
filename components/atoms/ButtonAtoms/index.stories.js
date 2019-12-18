import React from 'react';
import ButtonComponent from './index';

export default { title: 'Button Component' };

export const SmallButton = () => <ButtonComponent size="small" text="Small" />;
export const MediumButton = () => <ButtonComponent size="medium" text="Medium" />;
export const LargeButton = () => <ButtonComponent size="large" text="Large" />;
export const BlueLargeButton = () => <ButtonComponent size="large" text="Large" background="blue" />;
export const ColoredTextButton = () => <ButtonComponent size="large" text="Large" background="lightblue" fontColor="black" />;

import React from 'react';
import { Button } from './index';

export default { title: 'Button' };

export const SmallButton = () => <Button small>Small</Button>;
export const MediumButton = () => <Button medium>Medium</Button>;
export const LargeButton = () => <Button large>Large</Button>;
export const BlueLargeButton = () => <Button large background="blue">Large</Button>;
export const ColoredTextButton = () => <Button large background="lightblue" fontColor="black">Large</Button>;

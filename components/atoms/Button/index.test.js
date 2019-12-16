import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';

import { Button } from './index';

let tools;

beforeEach(() => {
  rtl.cleanup();
  // tools = rtl.render(<Button />);
  // console.log(tools);
});

describe('Button component', () => {
  tools = rtl.render(<Button />);

  it('shows the correct button text', () => {
    const buttonText = tools.findByText('some');
    console.log(tools);
    expect(buttonText).toBeInTheDocument();
  });
});

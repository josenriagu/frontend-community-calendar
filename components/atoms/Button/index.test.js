import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import { Button } from './index';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Button component', () => {
  it('shows the correct button text', async () => {
    await preloadAll();
    tools = rtl.render(<Button>some</Button>);

    const buttonText = await rtl.waitForElement(() => tools.queryByText(/some/));
    expect(buttonText).toBeInTheDocument();
  });
});

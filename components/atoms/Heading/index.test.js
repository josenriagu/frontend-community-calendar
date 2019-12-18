import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Heading from '.';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Heading component', () => {
  it('renders the text in a Heading element', async () => {
    await preloadAll();
    tools = rtl.render(<Heading>Heading</Heading>);

    const headingText = await rtl.waitForElement(() => tools.queryByText(/Heading/));
    expect(headingText).toBeInTheDocument();
  });
});

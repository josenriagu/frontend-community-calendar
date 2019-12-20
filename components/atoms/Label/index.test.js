import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Label from '.';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Label component', () => {
  it('renders the text in a Label element', async () => {
    await preloadAll();
    tools = rtl.render(<Label>Label</Label>);

    const labelText = await rtl.waitForElement(() => tools.queryByText(/Label/));
    expect(labelText).toBeInTheDocument();
  });
});

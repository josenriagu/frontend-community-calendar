import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Paragraph from '.';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Paragraph component', () => {
  it('renders the text in a Paragraph element', async () => {
    await preloadAll();
    tools = rtl.render(<Paragraph>Paragraph</Paragraph>);

    const paragraphText = await rtl.waitForElement(() => tools.queryByText(/Paragraph/));
    expect(paragraphText).toBeInTheDocument();
  });
});

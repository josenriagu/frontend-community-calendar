import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Icon from '.';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Icon Component', () => {
  it('renders an Icon component', async () => {
    await preloadAll();
    tools = rtl.render(<Icon type="environment" />);

    const icon = await rtl.waitForElement(() => tools.queryByTestId('icon-id'));
    expect(icon).toBeInTheDocument();
  });
});

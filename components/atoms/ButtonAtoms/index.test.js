import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import ButtonComponent from './index';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Button component', () => {
  it('plots the correct button type', async () => {
    await preloadAll();
    tools = rtl.render(
      <>
        <ButtonComponent size="small" text="Small" />
        <ButtonComponent size="medium" text="Medium" />
        <ButtonComponent size="large" text="Large" />
      </>
    );

    const SmallButton = await rtl.waitForElement(() => tools.queryByText(/small/i));
    const MediumButton = await rtl.waitForElement(() => tools.queryByText(/medium/i));
    const LargeButton = await rtl.waitForElement(() => tools.queryByText(/large/i));

    expect(SmallButton).toBeInTheDocument();
    expect(MediumButton).toBeInTheDocument();
    expect(LargeButton).toBeInTheDocument();
  });
});

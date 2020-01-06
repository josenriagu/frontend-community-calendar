import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import { NavBar, NavBarAlt } from './index.stories';

let tools;

beforeEach(() => rtl.cleanup());

describe('NavBar Test Suite', () => {
  it('renders NavBar correctly', async () => {
    await preloadAll();
    tools = await rtl.render(
      <>
        <NavBar />
        {/* <NavBarAlt /> */}
      </>,
    );

    const Create = await rtl.waitForElement(() => tools.findByText(/create event/i));
    const Login = await rtl.waitForElement(() => tools.findByText(/login/i));
    const Signup = await rtl.waitForElement(() => tools.findByText(/signup/i));

    expect(Create).toBeInTheDocument();
    expect(Login).toBeInTheDocument();
    expect(Signup).toBeInTheDocument();
  });
  it('renders NavBarAlt correctly', async () => {
    await preloadAll();
    tools = await rtl.render(
      <>
        <NavBarAlt />
      </>,
    );

    const Create = await rtl.waitForElement(() => tools.findByText(/create event/i));
    const Login = await rtl.waitForElement(() => tools.findByText(/login/i));
    const Signup = await rtl.waitForElement(() => tools.findByText(/signup/i));

    expect(Create).toBeInTheDocument();
    expect(Login).toBeInTheDocument();
    expect(Signup).toBeInTheDocument();
  });
});

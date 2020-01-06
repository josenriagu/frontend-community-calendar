import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import { SearchBar } from './index.stories';

let tools;

beforeEach(() => rtl.cleanup());

describe('SearchBar Test Suite', () => {
  it('renders Search Bar correctly', async () => {
    await preloadAll();
    tools = await rtl.render(<SearchBar />);

    const Search = await rtl.waitForElement(() => tools.findByText(/Search/i));

    expect(Search).toBeInTheDocument();
  });
});

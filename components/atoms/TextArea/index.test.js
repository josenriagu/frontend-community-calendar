import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import preloadAll from 'jest-next-dynamic';

import Input from '.';

let tools;

beforeEach(() => {
  rtl.cleanup();
});

describe('Input component', () => {
  it('enter text in Input field', async () => {
    await preloadAll();
    const inputText = 'text entered';
    const placeholder = 'Input';
    const { getByPlaceholderText } = rtl.render(<Input placeholder={placeholder} />);
    const input = getByPlaceholderText(placeholder);
    rtl.fireEvent.change(input, { target: { value: inputText } });
    expect(input.value).toBe(inputText);
  });
});

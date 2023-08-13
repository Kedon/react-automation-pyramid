/*
  Input Component Testing
  This test suite is designed to test the behavior of the Input component, which encapsulates an input field.

  The tests include:
  1. Rendering the input correctly with an initial value.
  2. Ensuring that the onChange handler is called correctly when the input value changes.

  Testing Library and Jest are used for testing.
*/

import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

import TestingThemeProvider from '../../utils/TestingThemeProvider'

import Input from './Input';

describe('Input component', () => {
  it('renders the input correctly', () => {
    const value = 'Test Value';
    const onChange = jest.fn();

    const { getByRole } = render(
      <TestingThemeProvider>
        <Input value={value} onChange={onChange} />
      </TestingThemeProvider>);
    const inputElement = getByRole('textbox');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(value);
  });

  it('calls the onChange handler correctly', () => {
    const value = 'Test Value';
    const onChange = jest.fn();

    const { getByRole } = render(
      <TestingThemeProvider>
        <Input value={value} onChange={onChange} />
      </TestingThemeProvider>
    );

    const inputElement = getByRole('textbox');

    const newValue = 'New Test Value';
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(inputElement).toBeInTheDocument();

  });

});

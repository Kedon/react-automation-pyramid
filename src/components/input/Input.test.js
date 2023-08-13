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

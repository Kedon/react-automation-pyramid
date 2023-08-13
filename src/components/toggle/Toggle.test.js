import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TestingThemeProvider from '../../utils/TestingThemeProvider'

import Toggle from './Toggle'; // Update this import path based on your project structure

describe('Toggle Component', () => {
  test('renders with default state and labels', () => {
    const mockOnChange = jest.fn();
    const { getByTestId, getByText } = render(
      <Toggle
        labelLeft="Off"
        labelRight="On"
        onChange={mockOnChange}
        defaultChecked={false}
      />, 
      {
        wrapper: TestingThemeProvider
      }
    );

    const toggle = getByTestId('toggle-component');
    const labelLeft = getByText('Off');
    const labelRight = getByText('On');

    expect(toggle).toBeInTheDocument();
    expect(labelLeft).toBeInTheDocument();
    expect(labelRight).toBeInTheDocument();
    expect(toggle).not.toBeChecked();
  });

  test('calls onChange when clicked', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Toggle
        labelLeft="Off"
        labelRight="On"
        onChange={mockOnChange}
        defaultChecked={false}
      />,
      {
        wrapper: TestingThemeProvider
      }
    );

    const toggle = getByTestId('toggle-component');

    fireEvent.click(toggle);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('updates checked state and calls onChange when clicked', () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Toggle
        labelLeft="Off"
        labelRight="On"
        onChange={mockOnChange}
        defaultChecked={false}
      />,
      {
        wrapper: TestingThemeProvider
      }
    );

    const toggle = getByTestId('toggle-component');

    fireEvent.click(toggle);

    expect(toggle).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });
});

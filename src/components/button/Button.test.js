import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For additional matchers

import TestingThemeProvider from '../../utils/TestingThemeProvider'

import Button from './Button';

describe('Button component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
        <TestingThemeProvider>
            <Button>Click me</Button>
        </TestingThemeProvider>
    );
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    // Check if the background color is present
    expect(button).toHaveStyle('background-color: ButtonFace'); // Replace 'ButtonFace' with your expected theme color value
  });

  it('renders correctly with custom color prop', () => {
    const { getByText } = render(
        <TestingThemeProvider>
            <Button color="primary">Click me</Button>
        </TestingThemeProvider>
    );
    const button = getByText('Click me');
    expect(button).toBeInTheDocument();
    // Check if the background color is present
    expect(button).toHaveStyle('background-color: ButtonFace'); // Replace 'ButtonFace' with your expected theme color value
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
        <TestingThemeProvider>
            <Button onClick={handleClick}>Click me</Button>
        </TestingThemeProvider>
    );
    const button = getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders correctly as disabled', () => {
    const { getByText } = render(
      <TestingThemeProvider>
        <Button disabled>Disabled Button</Button>
      </TestingThemeProvider>
    );
    const button = getByText('Disabled Button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});

/*
  Table Component Testing
  This test suite is designed to test the behavior of the Table component, which encapsulates a table for displaying tabular data.

  The test includes:
  - Rendering the table headers and data, and ensuring they are displayed correctly.

  Testing Library and Jest are used for testing.
*/

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TestingThemeProvider from '../../utils/TestingThemeProvider'

import Table from './Table';

describe('Table', () => {
  it('renders the table headers and data', () => {
    const headers = ['Name', 'Age', 'Location'];
    const data = [
      { Name: 'Alice', Age: 25, Location: 'New York' },
      { Name: 'Bob', Age: 30, Location: 'Los Angeles' },
    ];

    const { getByText } = render(
      <TestingThemeProvider>
        <Table headers={headers} data={data} />
      </TestingThemeProvider>
    );

    headers.forEach(header => {
      expect(getByText(header)).toBeInTheDocument();
    });

    data.forEach(row => {
      expect(getByText(row.Name)).toBeInTheDocument();
      expect(getByText(row.Age.toString())).toBeInTheDocument();
      expect(getByText(row.Location)).toBeInTheDocument();
    });
  });
});

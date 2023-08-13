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

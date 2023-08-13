/*
  Table Component
  This component defines a reusable table for displaying tabular data in a structured manner within React applications.

  Props:
  - headers: An array of strings representing the table column headers.
  - data: An array of objects (rows) where each object contains data for each column header.
  - testid: Test ID used for targeting in tests.

  Example Usage:
  <Table
    headers={['Name', 'Age', 'Location']}
    data={[
      { Name: 'John', Age: 30, Location: 'New York' },
      { Name: 'Jane', Age: 25, Location: 'San Francisco' },
      // ...
    ]}
  />
*/

import React from 'react';
import { TableWrapper, StyledTable, TableHeader, TableRow, TableCell } from './styles';

type TableProps = {
  headers: string[];
  data: Record<string, any>[];
  testid?: string;
};

const Table: React.FC<TableProps> = ({ headers, data, testid="data-table" }) => {
  return (
    <TableWrapper>
      <StyledTable data-testid={testid}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <TableHeader key={index}>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex}>{row[header]}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default Table;

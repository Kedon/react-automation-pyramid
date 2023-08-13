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

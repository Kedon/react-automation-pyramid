import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.system};
  }

  &.error-state {
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;

export const InputError = styled.small`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 12px;
`;

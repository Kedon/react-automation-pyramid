import styled from 'styled-components';

export const ToggleContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  appearance: none;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #ccc;
  position: relative;
  margin: 0;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: #1abc9c;
  }

  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: white;
    transition: transform 0.3s;
    transform: ${({ checked }) => (checked ? 'translateX(20px)' : 'translateX(0)')};
  }
`;

export const ToggleLabel = styled.span<{ position: string }>`
  margin-right: ${({ position }) => position === 'right' ? '5px' : '0'};
  margin-left: ${({ position }) => position === 'left' ? '5px' : '0'};
  color: ${props => props.theme.colors.white};
  user-select: none;
  font-size: 13px;
`;
import styled, { css } from 'styled-components';
import light from '../../styles/themes/light';

interface ContainerProps {
    color: keyof typeof light.colors; 
    disabled?: boolean;
}
  
export const Container = styled.button<ContainerProps>`
    min-width: 120px;
    padding: 10px;

    font-weight: bold;
    color: white;
    background-color: ${({ color, theme }) => theme.colors[color]};
    
    -webkit-appearance: none;
    
    /* Conditional styling for disabled button */
    ${({ disabled }) =>
        disabled
            ? css`
                  opacity: 0.5;
                  pointer-events: none; /* Disable interactions */
              `
            : css`
                  transition: opacity 0.3s;

                  &:hover {
                      opacity: 0.7;
                  }
              `}
`;

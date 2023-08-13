import styled from 'styled-components';
import light from '../../styles/themes/light';

interface ProductActionsButtonProps {
    color: keyof typeof light.colors; 
}

export const ProductHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductActionsButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductActionsButton = styled.button<ProductActionsButtonProps>`
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    &:not(:last-child) {
        margin-right: 10px;
    }
    background-color: transparent;
    color: ${({ color, theme }) => theme.colors[color]};
    &:hover {
        background-color: ${({ color, theme }) => theme.colors[color]};
        color: white;
    }
    

`;


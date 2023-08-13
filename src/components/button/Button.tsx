import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import light from '../../styles/themes/light';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: keyof typeof light.colors;
    testId?: string;
}
  
const Button: React.FC<IButtonProps> = ({
    children, 
    color="system", 
    testId="button",
    ...rest 
}) => (
    <Container color={color} data-testid={testId} {...rest}>
        {children}
    </Container>
);

export default Button;
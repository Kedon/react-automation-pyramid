/*
  Button Component
  This component defines a customizable button element for React applications. It encapsulates a button with various optional properties and styling.
  
  Props:
  - children: Content placed within the button.
  - color: Color of the button, accepts predefined values from light.colors or defaults to "system".
  - testId: Test ID used for targeting in tests.
  
  Example Usage:
  <Button color="primary" testId="submit-button">Submit</Button>
*/

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
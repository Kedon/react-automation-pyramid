// FloatingInput.tsx
import React, { useState } from 'react';
import { InputContainer, StyledInput, InputError } from './styles';

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  error?: string | null;
  testid?: string;
}


const Input: React.FC<FloatingInputProps> = ({ value, error, testid="input", onChange, ...rest }) => {
  const [isActive, setIsActive] = useState(value !== '');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    setIsActive(event.target.value !== '');
  };

  return (
    <InputContainer>
      <StyledInput 
        data-testid={testid}
        className={error ? 'error-state' : ''}
        type="text" 
        value={value} 
        onChange={handleInputChange} 
        {...rest}/>
      {error && <InputError>{error}</InputError>}
    </InputContainer>
  );
};

export default Input;

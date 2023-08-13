/*
  Input Component
  This component defines a customizable input field for React applications. It encapsulates an input element with various optional properties and styling.

  Props:
  - value: Current value of the input.
  - error: Error message associated with the input (if any).
  - testid: Test ID used for targeting in tests.
  - onChange: Callback function triggered on input value change.

  Example Usage:
  <Input
    value={inputValue}
    error="Invalid input"
    testid="username-input"
    onChange={(event) => setInputValue(event.target.value)}
  />
*/

import React, { useState, useCallback, memo } from 'react';
import { InputContainer, StyledInput, InputError } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  error?: string | null;
  testid?: string;
}


const Input: React.FC<InputProps> = ({ value, error, testid="input", onChange, ...rest }) => {
  const [isActive, setIsActive] = useState(value !== '');

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    setIsActive(event.target.value !== '');
  }, [onChange]);

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

export default memo(Input);

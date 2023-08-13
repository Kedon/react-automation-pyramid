import React, { useState } from 'react';
import { ToggleContainer, ToggleLabel, ToggleInput } from './styles';

interface ToggleProps {
  labelLeft?: string;
  labelRight?: string;
  onChange: (checked: boolean) => void;
  defaultChecked: boolean;
  testid?: string;
}

const Toggle: React.FC<ToggleProps> = ({ 
    labelLeft, 
    labelRight, 
    onChange, 
    defaultChecked = false,
    testid="toggle-component"
 }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <ToggleContainer>
        <ToggleLabel 
            position="right">
                {labelRight}
        </ToggleLabel>
        <ToggleInput data-testid={testid} type="checkbox" checked={checked} onChange={handleToggle} />
        <ToggleLabel 
            position="left">{labelLeft}
        </ToggleLabel>
    </ToggleContainer>
  );
};

export default Toggle;

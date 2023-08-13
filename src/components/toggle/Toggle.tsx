/*
  Toggle Component
  This component defines a toggle switch UI element for React applications. It allows users to switch between two states.

  Props:
  - labelLeft: Text label displayed on the left side of the toggle.
  - labelRight: Text label displayed on the right side of the toggle.
  - onChange: Callback function invoked when the toggle state changes. It receives a boolean parameter indicating the new state.
  - defaultChecked: Initial checked state of the toggle.
  - testid: Test ID used for targeting in tests.

  Example Usage:
  <Toggle
    labelLeft="Off"
    labelRight="On"
    onChange={(isChecked) => setIsToggled(isChecked)}
    defaultChecked={true}
  />
*/

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

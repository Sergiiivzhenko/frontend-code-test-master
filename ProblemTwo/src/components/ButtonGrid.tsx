import React from 'react';
import CalculatorButton from './CalculatorButton';

interface ButtonGridProps {
  onButtonPress: (buttonName: string) => void;
  displayValue: string;
}

interface ButtonConfig {
  label: string;
  type: 'function' | 'operator' | 'number';
  isWide?: boolean;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ onButtonPress, displayValue }) => {
  // Define the button layout for the calculator
  const buttons: ButtonConfig[] = [
    { label: displayValue !== '0' ? 'C' : 'AC', type: 'function' },
    { label: '±', type: 'function' },
    { label: '%', type: 'function' },
    { label: '÷', type: 'operator' },
    { label: '7', type: 'number' },
    { label: '8', type: 'number' },
    { label: '9', type: 'number' },
    { label: '×', type: 'operator' },
    { label: '4', type: 'number' },
    { label: '5', type: 'number' },
    { label: '6', type: 'number' },
    { label: '-', type: 'operator' },
    { label: '1', type: 'number' },
    { label: '2', type: 'number' },
    { label: '3', type: 'number' },
    { label: '+', type: 'operator' },
    { label: '0', type: 'number', isWide: true },
    { label: '.', type: 'number' },
    { label: '=', type: 'operator' },
  ];

  return (
    <div className="grid grid-cols-4 gap-[1px] p-[1px]">
      {buttons.map((button, index) => (
        <CalculatorButton
          key={index}
          label={button.label}
          type={button.type}
          isWide={button.isWide}
          onClick={() => onButtonPress(button.label)}
        />
      ))}
    </div>
  );
};

export default ButtonGrid;
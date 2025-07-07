import React from 'react';
import { cn } from '../lib/utils';

interface CalculatorButtonProps {
  label: string;
  type: 'function' | 'operator' | 'number';
  isWide?: boolean;
  onClick: () => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  label, 
  type, 
  isWide = false, 
  onClick 
}) => {
  // Define button styles based on type
  const getButtonStyles = (): string => {
    switch (type) {
      case 'operator':
        return 'bg-calc-orange text-white hover:bg-opacity-80';
      case 'function':
        return 'bg-calc-light-gray text-black hover:bg-opacity-80';
      case 'number':
      default:
        return 'bg-calc-dark-gray text-white hover:bg-opacity-80';
    }
  };

  return (
    <button
      className={cn(
        'h-20 rounded-full flex items-center justify-center text-3xl font-light transition-colors',
        getButtonStyles(),
        isWide ? 'col-span-2 justify-start pl-7' : ''
      )}
      onClick={onClick}
      data-testid={`button-${label}`}
    >
      {label}
    </button>
  );
};

export default CalculatorButton;
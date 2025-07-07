import React from 'react';

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  // Format the display value to handle large numbers
  const formatValue = (val: string): string => {
    if (isNaN(+val)) return val;

    // For regular numbers, ensure we don't exceed the display width
    if (val.length > 10) {
      return val.slice(0, 10);
    }

    return val;
  };

  return (
    <div className="flex justify-end items-end h-32 px-6 pb-4" data-testid="calculator-display">
      <div className="text-white text-6xl font-light truncate">
        {formatValue(value)}
      </div>
    </div>
  );
};

export default Display;

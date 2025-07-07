import React, { useState } from 'react';
import Display from './Display';
import ButtonGrid from './ButtonGrid';

type Operator = '+' | '-' | '×' | '÷' | '=' | null;

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const clearAll = (): void => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const clearDisplay = (): void => {
    setDisplayValue('0');
  };

  const toggleSign = (): void => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  const inputPercent = (): void => {
    const currentValue = parseFloat(displayValue);
    const newValue = currentValue / 100;
    setDisplayValue(String(newValue));
  };

  const inputDot = (): void => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const inputDigit = (digit: number): void => {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const performOperation = (nextOperator: Operator): void => {
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operator) {
      const currentValue = previousValue || 0;
      let newValue: number;

      switch (operator) {
        case '+':
          newValue = currentValue + inputValue;
          break;
        case '-':
          newValue = currentValue - inputValue;
          break;
        case '×':
          newValue = currentValue * inputValue;
          break;
        case '÷':
          newValue = currentValue / inputValue;
          break;
        default:
          newValue = inputValue;
      }

      setPreviousValue(newValue);
      setDisplayValue(String(newValue));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleButtonPress = (buttonName: string): void => {
    switch (buttonName) {
      case 'AC':
      case 'C':
        displayValue !== '0' ? clearDisplay() : clearAll();
        break;
      case '±':
        toggleSign();
        break;
      case '%':
        inputPercent();
        break;
      case '÷':
      case '×':
      case '-':
      case '+':
        performOperation(buttonName as Operator);
        break;
      case '=':
        performOperation('=');
        break;
      case '.':
        inputDot();
        break;
      default:
        if (/\d/.test(buttonName)) {
          inputDigit(parseInt(buttonName, 10));
        }
    }
  };

  return (
    <div className="w-[320px] bg-black rounded-3xl overflow-hidden shadow-2xl">
      <Display value={displayValue} />
      <ButtonGrid onButtonPress={handleButtonPress} displayValue={displayValue} />
    </div>
  );
};

export default Calculator;
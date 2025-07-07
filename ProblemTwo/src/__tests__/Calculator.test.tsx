import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  it('renders the calculator with initial display value of 0', () => {
    render(<Calculator />);
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('0');
  });

  it('updates display when number buttons are clicked', () => {
    render(<Calculator />);

    // Click on number 5
    fireEvent.click(screen.getByTestId('button-5'));
    expect(screen.getByTestId('calculator-display').textContent).toBe('5');

    // Click on number 3
    fireEvent.click(screen.getByTestId('button-3'));
    expect(screen.getByTestId('calculator-display').textContent).toBe('53');
  });

  it('performs addition correctly', () => {
    render(<Calculator />);

    // 5 + 3 = 8
    fireEvent.click(screen.getByTestId('button-5'));
    fireEvent.click(screen.getByTestId('button-+'));
    fireEvent.click(screen.getByTestId('button-3'));
    fireEvent.click(screen.getByTestId('button-='));

    expect(screen.getByTestId('calculator-display').textContent).toBe('8');
  });

  it('performs subtraction correctly', () => {
    render(<Calculator />);

    // 9 - 4 = 5
    fireEvent.click(screen.getByTestId('button-9'));
    fireEvent.click(screen.getByTestId('button--'));
    fireEvent.click(screen.getByTestId('button-4'));
    fireEvent.click(screen.getByTestId('button-='));

    expect(screen.getByTestId('calculator-display').textContent).toBe('5');
  });

  it('performs multiplication correctly', () => {
    render(<Calculator />);

    // 6 × 7 = 42
    fireEvent.click(screen.getByTestId('button-6'));
    fireEvent.click(screen.getByTestId('button-×'));
    fireEvent.click(screen.getByTestId('button-7'));
    fireEvent.click(screen.getByTestId('button-='));

    expect(screen.getByTestId('calculator-display').textContent).toBe('42');
  });

  it('performs division correctly', () => {
    render(<Calculator />);

    // 8 ÷ 2 = 4
    fireEvent.click(screen.getByTestId('button-8'));
    fireEvent.click(screen.getByTestId('button-÷'));
    fireEvent.click(screen.getByTestId('button-2'));
    fireEvent.click(screen.getByTestId('button-='));

    expect(screen.getByTestId('calculator-display').textContent).toBe('4');
  });

  it('clears the display when C button is clicked', () => {
    render(<Calculator />);

    // Enter some numbers
    fireEvent.click(screen.getByTestId('button-5'));
    fireEvent.click(screen.getByTestId('button-3'));

    // Clear the display
    fireEvent.click(screen.getByTestId('button-C'));

    expect(screen.getByTestId('calculator-display').textContent).toBe('0');
  });

  it('toggles the sign of the number when ± button is clicked', () => {
    render(<Calculator />);

    // Enter a number
    fireEvent.click(screen.getByTestId('button-5'));

    // Toggle the sign
    fireEvent.click(screen.getByTestId('button-±'));

    expect(screen.getByTestId('calculator-display').textContent).toBe('-5');

    // Toggle the sign again
    fireEvent.click(screen.getByTestId('button-±'));

    expect(screen.getByTestId('calculator-display').textContent).toBe('5');
  });

  it('calculates percentage correctly', () => {
    render(<Calculator />);

    // Enter 50 and calculate 50%
    fireEvent.click(screen.getByTestId('button-5'));
    fireEvent.click(screen.getByTestId('button-0'));
    fireEvent.click(screen.getByTestId('button-%'));

    expect(screen.getByTestId('calculator-display').textContent).toBe('0.5');
  });

  it('handles decimal points correctly', () => {
    render(<Calculator />);

    // Enter 5.25
    fireEvent.click(screen.getByTestId('button-5'));
    fireEvent.click(screen.getByTestId('button-.'));
    fireEvent.click(screen.getByTestId('button-2'));
    fireEvent.click(screen.getByTestId('button-5'));

    expect(screen.getByTestId('calculator-display').textContent).toBe('5.25');

    // Try to add another decimal point (should be ignored)
    fireEvent.click(screen.getByTestId('button-.'));

    expect(screen.getByTestId('calculator-display').textContent).toBe('5.25');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CalculatorButton from '../components/CalculatorButton';

describe('CalculatorButton', () => {
  it('renders the button with the correct label', () => {
    render(<CalculatorButton label="7" type="number" onClick={() => {}} />);
    expect(screen.getByTestId('button-7')).toBeInTheDocument();
    expect(screen.getByTestId('button-7')).toHaveTextContent('7');
  });

  it('calls onClick when the button is clicked', () => {
    const mockOnClick = vi.fn();
    render(<CalculatorButton label="7" type="number" onClick={mockOnClick} />);

    fireEvent.click(screen.getByTestId('button-7'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct styles for number buttons', () => {
    render(<CalculatorButton label="7" type="number" onClick={() => {}} />);
    const button = screen.getByTestId('button-7');

    // Check for dark gray background class
    expect(button.className).toContain('bg-calc-dark-gray');
    expect(button.className).toContain('text-white');
  });

  it('applies the correct styles for operator buttons', () => {
    render(<CalculatorButton label="+" type="operator" onClick={() => {}} />);
    const button = screen.getByTestId('button-+');

    // Check for orange background class
    expect(button.className).toContain('bg-calc-orange');
    expect(button.className).toContain('text-white');
  });

  it('applies the correct styles for function buttons', () => {
    render(<CalculatorButton label="AC" type="function" onClick={() => {}} />);
    const button = screen.getByTestId('button-AC');

    // Check for light gray background class
    expect(button.className).toContain('bg-calc-light-gray');
    expect(button.className).toContain('text-black');
  });

  it('applies the wide style for buttons with isWide=true', () => {
    render(<CalculatorButton label="0" type="number" isWide={true} onClick={() => {}} />);
    const button = screen.getByTestId('button-0');

    // Check for col-span-2 class
    expect(button.className).toContain('col-span-2');
    expect(button.className).toContain('justify-start');
  });

  it('does not apply the wide style for buttons with isWide=false', () => {
    render(<CalculatorButton label="1" type="number" isWide={false} onClick={() => {}} />);
    const button = screen.getByTestId('button-1');

    // Check that col-span-2 class is not present
    expect(button.className).not.toContain('col-span-2');
    expect(button.className).not.toContain('justify-start');
  });
});

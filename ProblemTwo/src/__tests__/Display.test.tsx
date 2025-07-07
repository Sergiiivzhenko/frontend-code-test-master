import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Display from '../components/Display';

describe('Display', () => {
  it('renders the display with the provided value', () => {
    render(<Display value="42" />);
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('42');
  });

  it('formats large numbers correctly', () => {
    render(<Display value="1234567890" />);
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('1234567890');
  });

  it('formats decimal numbers correctly', () => {
    render(<Display value="123.456" />);
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('123.456');
  });

  it('formats negative numbers correctly', () => {
    render(<Display value="-42" />);
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('-42');
  });

  it('handles zero correctly', () => {
    render(<Display value="0" />);
    const display = screen.getByTestId('calculator-display');
    expect(display.textContent).toBe('0');
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ButtonGrid from '../components/ButtonGrid';

describe('ButtonGrid', () => {
  it('renders all calculator buttons', () => {
    const mockOnButtonPress = vi.fn();
    render(<ButtonGrid onButtonPress={mockOnButtonPress} displayValue="0" />);

    // Check for number buttons
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByTestId(`button-${i}`)).toBeInTheDocument();
    }

    // Check for operation buttons
    expect(screen.getByTestId('button-+')).toBeInTheDocument();
    expect(screen.getByTestId('button--')).toBeInTheDocument();
    expect(screen.getByTestId('button-×')).toBeInTheDocument();
    expect(screen.getByTestId('button-÷')).toBeInTheDocument();
    expect(screen.getByTestId('button-=')).toBeInTheDocument();

    // Check for function buttons
    expect(screen.getByTestId('button-AC')).toBeInTheDocument();
    expect(screen.getByTestId('button-±')).toBeInTheDocument();
    expect(screen.getByTestId('button-%')).toBeInTheDocument();

    // Check for decimal point
    expect(screen.getByTestId('button-.')).toBeInTheDocument();
  });

  it('calls onButtonPress with the correct button label when clicked', () => {
    const mockOnButtonPress = vi.fn();
    render(<ButtonGrid onButtonPress={mockOnButtonPress} displayValue="0" />);

    // Click on number 5
    fireEvent.click(screen.getByTestId('button-5'));
    expect(mockOnButtonPress).toHaveBeenCalledWith('5');

    // Click on plus button
    fireEvent.click(screen.getByTestId('button-+'));
    expect(mockOnButtonPress).toHaveBeenCalledWith('+');

    // Click on AC button
    fireEvent.click(screen.getByTestId('button-AC'));
    expect(mockOnButtonPress).toHaveBeenCalledWith('AC');
  });

  it('shows C instead of AC when displayValue is not 0', () => {
    const mockOnButtonPress = vi.fn();
    render(<ButtonGrid onButtonPress={mockOnButtonPress} displayValue="42" />);

    expect(screen.getByTestId('button-C')).toBeInTheDocument();
    expect(screen.queryByTestId('button-AC')).not.toBeInTheDocument();
  });

  it('shows AC when displayValue is 0', () => {
    const mockOnButtonPress = vi.fn();
    render(<ButtonGrid onButtonPress={mockOnButtonPress} displayValue="0" />);

    expect(screen.getByTestId('button-AC')).toBeInTheDocument();
    expect(screen.queryByTestId('button-C')).not.toBeInTheDocument();
  });
});

import React from 'react';
import { Display } from './Display';
import { Keypad } from './Keypad';
import { useCalculator } from '../../hooks/useCalculator';

export function Calculator() {
  const {
    display,
    handleNumberClick,
    handleOperatorClick,
    handleCalculate,
    handleClear
  } = useCalculator();

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <Display value={display} />
      <Keypad
        onNumberClick={handleNumberClick}
        onOperatorClick={handleOperatorClick}
        onCalculate={handleCalculate}
        onClear={handleClear}
      />
    </div>
  );
}
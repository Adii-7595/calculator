import React from 'react';
import { Button } from '../common/Button';
import { operators } from '../../utils/calculatorUtils';

export function OperatorPad({ onOperatorClick }) {
  return (
    <div className="flex flex-col gap-1">
      {operators.map(operator => (
        <Button
          key={operator}
          variant="operator"
          onClick={() => onOperatorClick(operator)}
        >
          {operator}
        </Button>
      ))}
    </div>
  );
}
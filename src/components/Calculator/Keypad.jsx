import React from 'react';
import { Button } from '../common/Button';
import { NumPad } from './NumPad';
import { OperatorPad } from './OperatorPad';

export function Keypad({ onNumberClick, onOperatorClick, onClear, onCalculate }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 grid grid-cols-4 gap-1">
        <Button variant="clear" onClick={onClear}>C</Button>
        <Button variant="operator" onClick={() => onOperatorClick('(')}>(</Button>
        <Button variant="operator" onClick={() => onOperatorClick(')')}>)</Button>
        <Button variant="equals" onClick={onCalculate}>=</Button>
      </div>
      <div className="col-span-3">
        <NumPad onNumberClick={onNumberClick} />
      </div>
      <div className="col-span-1">
        <OperatorPad onOperatorClick={onOperatorClick} />
      </div>
    </div>
  );
}
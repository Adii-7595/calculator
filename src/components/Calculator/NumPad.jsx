import React from 'react';
import { Button } from '../common/Button';
import { numberPadLayout } from '../../utils/calculatorUtils';

export function NumPad({ onNumberClick }) {
  return (
    <div className="grid grid-rows-4 gap-1">
      {numberPadLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-3 gap-1">
          {row.map((num) => (
            <Button
              key={num}
              onClick={() => onNumberClick(num)}
              className={`${num === '0' ? 'col-span-2' : ''}`}
            >
              {num}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
}
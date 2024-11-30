import React from 'react';
import { formatNumber } from '../../utils/calculatorUtils';

export function Display({ value }) {
  const displayValue = formatNumber(value);
  
  return (
    <div className="w-full p-4 mb-4 bg-gray-800 rounded-lg">
      <div className="text-3xl font-mono text-white overflow-hidden text-ellipsis text-right">
        {displayValue}
      </div>
    </div>
  );
}
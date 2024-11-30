import React from 'react';

export function Button({ onClick, children, variant = 'default', className = '' }) {
  const baseClasses = 'calculator-button font-bold rounded-lg m-1 text-lg transition-colors h-16';
  const variantClasses = {
    default: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    operator: 'bg-orange-400 hover:bg-orange-500 text-white',
    equals: 'bg-blue-500 hover:bg-blue-600 text-white',
    clear: 'bg-red-500 hover:bg-red-600 text-white'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
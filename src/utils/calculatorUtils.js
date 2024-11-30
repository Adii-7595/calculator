export const operators = ['+', '-', '*', '/'];

export const numberPadLayout = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0', '.']
];

export function calculate(firstOperand, secondOperand, operator) {
  const a = parseFloat(firstOperand);
  const b = parseFloat(secondOperand);

  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return 'Error';
      }
      return a / b;
    default:
      return secondOperand;
  }
}

export function formatNumber(number) {
  if (number === 'Error') return number;
  const formatted = parseFloat(number).toLocaleString('en-US', {
    maximumFractionDigits: 8,
    minimumFractionDigits: 0
  });
  return formatted;
}
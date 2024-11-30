# Calculator

A modern calculator application built with React and Vite. This calculator features:

- Basic arithmetic operations (+, -, *, /)
- Clean and responsive design
- Keyboard support
- Error handling for division by zero
- Number formatting

## Features

- Modern UI with Tailwind CSS
- Component-based architecture
- Custom hooks for calculator logic
- Responsive layout
- Clear and organized codebase

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
  ├── components/
  │   ├── Calculator/
  │   │   ├── Calculator.jsx
  │   │   ├── Display.jsx
  │   │   ├── Keypad.jsx
  │   │   ├── NumPad.jsx
  │   │   └── OperatorPad.jsx
  │   └── common/
  │       └── Button.jsx
  ├── hooks/
  │   └── useCalculator.js
  ├── utils/
  │   └── calculatorUtils.js
  ├── App.jsx
  └── main.jsx
```
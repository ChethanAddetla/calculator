import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import Button from './Button';
import Display from './Display';
// import '../styles/Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);
  const [confetti, setConfetti] = useState(false);

  const buttons = [
    '(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '+/-', '%', '÷',
    '2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×',
    '⅟x', '²√x', '³√x', 'ʸ√x', 'ln', 'log₁₀', '4', '5', '6', '-',
    'x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+',
    'Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '='
  ];

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(display.replace('×', '*').replace('÷', '/'));
        if (display.includes('2') && display.includes('6')) {
          setConfetti(true);
          setTimeout(() => setConfetti(false), 3000);
        }
        setResult(evalResult);
        setDisplay(evalResult.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult(null);
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      {confetti && <ConfettiExplosion />}
      <Display display={display} />
      <div className="buttons">
        {buttons.map((btn, index) => (
          <Button key={index} value={btn} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;

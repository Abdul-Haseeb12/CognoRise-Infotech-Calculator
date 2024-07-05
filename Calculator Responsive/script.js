// script.js

document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));
    let currentInput = '';
    let previousInput = '';
    let operation = '';
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
  
        if (value === 'C') {
          currentInput = '';
          previousInput = '';
          operation = '';
          display.innerText = '0';
        } else if (value === '=') {
          if (operation && currentInput && previousInput) {
            currentInput = operate(operation, parseFloat(previousInput), parseFloat(currentInput)).toString();
            display.innerText = currentInput;
            previousInput = '';
            operation = '';
          }
        } else if (['+', '-', '*', '/'].includes(value)) {
          if (currentInput) {
            operation = value;
            previousInput = currentInput;
            currentInput = '';
          }
        } else {
          currentInput += value;
          display.innerText = currentInput;
        }
      });
    });
  
    function operate(operator, a, b) {
      switch (operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
        default:
          return 0;
      }
    }
  });
  
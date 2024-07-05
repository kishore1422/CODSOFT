// Get references to the display elements
let currentOperandTextElement = document.getElementById("current-operand");
let previousOperandTextElement = document.getElementById("previous-operand");

// Initialize variables to store operands and operation
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Function to clear the calculator display and reset variables
function clearDisplay() {
  currentOperandTextElement.innerText = '0'; // Reset the current operand display to '0'
  previousOperandTextElement.innerText = ''; // Clear the previous operand display
  currentOperand = ''; // Clear the current operand value
  previousOperand = ''; // Clear the previous operand value
  operation = undefined; // Clear the current operation
}

// Function to delete the last digit of the current operand
function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1); // Remove the last character from currentOperand
  if (currentOperand === '') { // If the currentOperand is empty
    currentOperandTextElement.innerText = '0'; // Display '0'
  } else {
    currentOperandTextElement.innerText = currentOperand; // Otherwise, display the currentOperand
  }
}

// Function to append a number to the current operand
function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return; // Prevent adding multiple decimals
  currentOperand = currentOperand.toString() + number.toString(); // Append the number to currentOperand
  currentOperandTextElement.innerText = currentOperand; // Update the display with the currentOperand
}

// Function to choose an operation and prepare for the next number entry
function chooseOperation(op) {
  if (currentOperand === '') return; // If there's no current operand, do nothing
  if (previousOperand !== '') { // If there's a previous operand
    compute(); // Perform the computation
  }
  operation = op; // Set the current operation
  previousOperand = currentOperand; // Move the current operand to the previous operand
  currentOperand = ''; // Clear the current operand
  previousOperandTextElement.innerText = `${previousOperand} ${operation}`; // Display the previous operand and operation
}

// Function to perform the selected operation and update the display
function compute() {
  let computation;
  const prev = parseFloat(previousOperand); // Convert previous operand to a number
  const current = parseFloat(currentOperand); // Convert current operand to a number
  if (isNaN(prev) || isNaN(current)) return; // If either operand is not a number, do nothing
  switch (operation) { // Perform the appropriate operation
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }
  currentOperand = computation; // Set the result as the current operand
  operation = undefined; // Clear the current operation
  previousOperand = ''; // Clear the previous operand
  currentOperandTextElement.innerText = currentOperand; // Update the display with the result
  previousOperandTextElement.innerText = ''; // Clear the previous operand display
}

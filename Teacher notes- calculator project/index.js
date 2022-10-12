// THE MEMORY OF OUR CALCULATOR
// here is where we store the temporary information
let lastResult = null;
let lastOperation = null;
let hasFinished = false;
// These variables are declared outside every function
// We can read them from any function

window.onload = function () {
  // GET the references of the DOM nodes of numbers / from function / from cancel / from result buttons
  const numericButtons = document.querySelectorAll(".numeric-button");
  const functionButtons = document.querySelectorAll(".function-button");
  const cancelButtonNode = document.querySelector(".cancel-button");
  const resultButtonNode = document.querySelector(".result-button");

  // cycle over the collection of nodes to attach the appropriate corresponding event linsteners
  //   for (let i = 0; i < numericButtons.length; i++) {
  //     const button = numericButtons[i];

  //     button.addEventListener("click", addNumberToResult);
  //   }

  for (let button of numericButtons) {
    button.addEventListener("click", addNumberToResult);
  }
  for (let button of functionButtons) {
    button.addEventListener("click", saveOperationAndValue);
  }

  // "=" button
  resultButtonNode.onclick = showResult;

  // "C" button
  cancelButtonNode.onclick = clearState;
};

const addNumberToResult = function (event) {
  const clickedNode = event.target;
  const numberPressed = clickedNode.innerText;
  const inputNode = document.getElementById("result");

  // determining if we are in the first step or not, to reassign or append accordingly
  if (inputNode.value === "0" || hasFinished === true) {
    inputNode.value = numberPressed;
    hasFinished = false;
  } else {
    inputNode.value += numberPressed;
  }
};

const displayPartialOperation = function (operation, firstOperand) {
  const operationNode = document.getElementById("operation");
  if (operation) {
    operationNode.innerText = `${firstOperand} ${operation}`;
  } else {
    operationNode.innerText = "";
  }
};

const saveOperationAndValue = function (event) {
  const clickedNode = event.target;

  lastOperation = clickedNode.innerText;
  lastResult = document.getElementById("result").value;
  displayPartialOperation(lastOperation, lastResult);

  console.log("First Operand", lastResult);
  console.log("Operation", lastOperation);

  clearResult();
};

const clearResult = function () {
  document.getElementById("result").value = "0";
};

const executeLastOperation = function () {
  const inputNode = document.getElementById("result");
  const currentResult = inputNode.value; // string

  const firstOperand = parseFloat(lastResult); //number
  const secondOperand = parseFloat(currentResult); //number

  console.log("First Operand", lastResult);
  console.log("Second Operand", secondOperand);

  switch (lastOperation) {
    case "+":
      lastResult = firstOperand + secondOperand;
      break;
    case "-":
      lastResult = firstOperand - secondOperand;
      break;
    case "*":
      lastResult = firstOperand * secondOperand;
      break;
    case "/":
      lastResult = firstOperand / secondOperand;
      break;

    default:
      break;
  }
};

const clearMemory = function () {
  lastOperation = null;
  lastResult = null;
  displayPartialOperation(false);
};

const showResult = function () {
  executeLastOperation();

  const inputNode = document.getElementById("result");

  if (lastResult === null) {
    inputNode.value = "0";
  } else {
    inputNode.value = lastResult;
  }
  console.log("RESULT", lastResult);

  hasFinished = true;
  clearMemory();
};

const clearState = function () {
  clearMemory();
  clearResult();
};

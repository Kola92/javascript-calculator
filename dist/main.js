// Declare variables

var clearBtn = document.getElementById("clear");
const decimalBtn = document.getElementById("decimal");
var backspaceBtn = document.getElementById('backspace');

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".number-operators");

var display = document.getElementById("display");

var displayVal = "0";
var pendingVal;
var evalStringArray = [];

// Update calc display value once click
const updateDisplayVal = (evt) => {
  var btnText = evt.target.innerText;

  if (displayVal === "0") {
    displayVal = "";
  }
  displayVal += btnText;
  display.innerText = displayVal;
};

// Execute mathematical operations once operator buttons and equal button are clicked
const performOperation = (evt) => {
  var operator = evt.target.innerText;
  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;
    case "x":
      pendingVal = displayVal;
      displayVal = "0";
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;
    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;
    case "=":
      evalStringArray.push(displayVal);
      var evaluate = eval(evalStringArray.join(' '));
      displayVal = evaluate + '';
      display.innerText = displayVal;
      evalStringArray = [];
      break;
    default:
      break;
  }
}

numberBtns.forEach((btn) => {
  btn.addEventListener("click", updateDisplayVal);
});

operatorBtns.forEach((operator) => {
  operator.addEventListener("click", performOperation);
});

clearBtn.onclick = () => {
  displayVal = "";
  pendingVal = undefined;
  evalStringArray = [];
  display.innerText = 0;
};

backspaceBtn.onclick = () => {
  let lengthOfDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);

  if (displayVal === "") displayVal = "0";

  display.innerText = displayVal;
};

decimalBtn.onclick = () => {
    if (!displayVal.includes('.')) displayVal += '.';
    display.innerText = displayVal;
}
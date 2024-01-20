result = document.getElementById("result");

function appendDigit(value) {
  result.value += value;
}

function appendOperator(operator) {
  result.value += operator;
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

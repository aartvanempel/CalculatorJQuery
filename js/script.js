// ready
$(document).ready(function() {
  // klik acties
  $(".number").click(numberState);
  $(".operator").click(operatorState);
  $(".equal-to").click(calculateState);
  $(".clear").click(clearState);
});

// functions
function numberState() {
  var displayText = $("#display").val();
  var buttonText = $(this).text();
  var newText = displayText + buttonText;
  $("#display").val(newText);
}

var firstNumText;
var operator;
function operatorState() {
  firstNumText = $("#display").val();
  operator = $(this).text();
  $("#display").val("");
}

function calculateState() {
  var firstNumInt = parseInt(firstNumText);
  var secondNumInt = parseInt($("#display").val());
  var result;

  if (operator == "+") {
    result = firstNumInt + secondNumInt;
  }
  if (operator == "-") {
    result = firstNumInt - secondNumInt;
  }
  if (operator == "/") {
    result = firstNumInt / secondNumInt;
  }
  if (operator == "*") {
    result = firstNumInt * secondNumInt;
  }

  $("#display").val(result);
}

function clearState(event) {
  $("#display").val("");
}

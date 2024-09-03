var currentNumber = 1;
var num1;
var num2;
var click = 1;



var $screen = $("#screen");
var $number = $(".number");




$number.on('click', function() {
  if (click > 8) {
    return;
  }
  click++;
  var numberPressed = $(this).html();
  $screen.append(numberPressed);

  if (currentNumber == 1) {
    if (num1 == null) {
      num1 = numberPressed;
    } else {
      num1 = num1 + numberPressed;
    }
  }
  if (currentNumber == 2) {
    if (num2 == null) {
      num2 = numberPressed;
    } else {
      num2 = num2 + numberPressed;
    }
  }
});


/*
document.getElementById("num1").onclick = function write1()
{
  $screen.append(1);
}

document.getElementById("num2").onclick = function write2()
{
  $screen.append(2);
}

document.getElementById("num3").onclick = function write3()
{
  $screen.append(3);
}

document.getElementById("num4").onclick = function write4()
{
  $screen.append(4);
}

document.getElementById("num5").onclick = function write5()
{
  $screen.append(5);
}

document.getElementById("num6").onclick = function write6()
{
  $screen.append(6);
}

document.getElementById("num7").onclick = function write7()
{
  $screen.append(7);
}

document.getElementById("num8").onclick = function write8()
{
  $screen.append(8);
}

document.getElementById("num9").onclick = function write9()
{
  $screen.append(9);
}

document.getElementById("num0").onclick = function write0()
{
  $screen.append(0);
}
*/

function more() {
  if (click > 8) {
    click = click - 5;
  }
  if (currentNumber == 2) {
    findAnswer();
    $screen.empty();
    $screen.append(num1);
  }
  currentNumber = 2;
}

$("#clear").on('click', function()
{
  $screen.empty();
  num1 = null;
  num2 = null;
  currentNumber = 1;
  click = 0;
});

$("#plus").on('click', function()
{
   more();
  $screen.append("+");
  op = "+";
})

$("#minus").on('click', function()
{
   more();
  $screen.append("-");
  op = "-";
})

$("#multiply").on('click', function()
{
   more();
  $screen.append("x");
  op = "x";
})

$("#divide").on('click', function()
{
   more();
  $screen.append("÷");
  op = "÷";
})

function findAnswer() {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (op == "+") {
    answer = num1 + num2;
  }
  if (op =="-") {
    answer = num1 - num2;
  }
  if (op == "x") {
    answer = num1 * num2;
  }
  if (op == "÷") {
    answer = num1 / num2;
  }
  num1 = answer;
  num2 = null;
  currentNumber = 1;
}

$("#equals").on('click', function()
{
  $screen.append("=");
  findAnswer();
  if (click > 8) {
    $screen.empty();
    var answerLength = answer.toString();
    click = answerLength.length;
  }
  $screen.append(answer);
})
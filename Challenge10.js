function Add(){
  var number1 = document.getElementById("Number1").value;
  var number2 = document.getElementById("Number2").value;
  var result = parseInt (number1) + parseInt(number2);

  document.getElementById("demo").innerHTML = result;
}

function Subtract(){
  var number1 = document.getElementById("Number1").value;
  var number2 = document.getElementById("Number2").value;
  var result = parseInt (number1) - parseInt(number2);

  document.getElementById("demo").innerHTML = result;
}

function Multiply(){
  var number1 = document.getElementById("Number1").value;
  var number2 = document.getElementById("Number2").value;
  var result = parseInt (number1) * parseInt(number2);

  document.getElementById("demo").innerHTML = result;
}

function Divide(){
  var number1 = document.getElementById("Number1").value;
  var number2 = document.getElementById("Number2").value;
  var result = parseInt (number1) / parseInt(number2);

  document.getElementById("demo").innerHTML = result;
}

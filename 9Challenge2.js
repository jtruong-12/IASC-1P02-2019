var birthYear = prompt("What is your age?");
var date = new Date();
var currentYear = date.getFullYear();
var userAge = currentYear - birthYear;
document.getElementById("calculateage").innerHTML = userAge;

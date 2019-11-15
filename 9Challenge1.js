var initial = new Date();

function stopTime(){
  var current = new Date();
  console.log(initial.getTime());
  console.log(current.getTime());

  var timeDifference = (current - initial) / 1000;
  console.log(timeDifference);

  alert("You have been on the page for: " + timeDifference + "seconds");
}

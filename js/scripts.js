$(document).ready(function() {

  var age = parseInt(prompt("Enter you age: "));

  if (age >= 18) {
    $("#oldEnough").show();
  } else {
    $("#tooYoung").show();
  }
});

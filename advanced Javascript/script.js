//scope

// Root Scope (window)
// var fun =5;
//
// function funFunction() {
//   //child Scope
//   var fun = "hellooo";
//   console.log(1, fun);
// }
//
// function funerFunction() {
//   //child Scope
//   var fun = "byee";
//   console.log(2, fun);
// }
//
// function funestFunction() {
//   //child Scope
//   var fun = "AHHHHHHH";
//   console.log(3, fun);
// }
//
// console.log("window", fun);

//condition ? expr1 : expr2;

function isUserValid(bool) {
  return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access Denied";

var automatedAnswer = "Your account # " + (isUserValid(false) ? "1234" : "Not available");

//switch statement
function moveCommand(direction) {
  var whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

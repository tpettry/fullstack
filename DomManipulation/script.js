// var button = document.getElementsByTagName("button")[0];
//
// button.addEventListener("click", function() {
//   console.log("CLICK!!!!");
// })

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0){
      createListElement()
    }else {
      callError()
    }
  }

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
      createListElement()
    }else if (event.keyCode === 13) {
      callError()
    }
  }

function callError() {
  alert("please enter an item");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

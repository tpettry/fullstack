var todos = [
  "clean room",
  "brush teeth",
  "exercise",
  "study javascript",
  "eat healthy"
];

//Looping i stands for index

for (var i=0; i < todos.length; i++) {
  todos[i] = todos[i] + "!";
}

//remove items off of the list
var todosLength = todos.length;
for (var i=0; i <  todosLength; i++) {
  todos.pop();
}

//while loop
var counterOne = 0;
while (counterOne < 10) {
  console.log(counterOne);
  counterOne++
}
//counting down
var counterOne = 10;
while (counterOne > 0) {
  console.log(counterOne);
  counterOne--
}

//do while Looping
var counterTwo = 10;
do {
  console.log(counterTwo);
  counterTwo--;
}while (counterTwo > 0);

//forEach method
todos.forEach(function(i) {
  console.log(i);
});

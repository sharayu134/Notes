function sayHello(name) {
  console.log("Hello there, Hitesh");
  console.log(`Hello there, ${name}. How are you?`); //VVIMP when having many variable 
}

sayHello(); // calling a function
sayHello; //referencing a function

// sayHello("hitesh");
// sayHello("Sammy");

function namstey() { // here no return like java
  return "Hello in India"; 
}

var greetings = namstey();

console.log(greetings);
console.log(namstey());

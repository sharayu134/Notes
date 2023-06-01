// sayHello();

// function sayHello() {
//   console.log("Hello");
// }  This works as even the function is used before declaration -> this has to do with "context"
// here in context everything is registered even if it's order is not as we follow in java

if (2 === "2") {
  console.log("This is false");
}

if (2 == "2") {
  console.log("This is true");
}

var myName = "hitesh";
if (myName === window.myName) { // this only works in browser as the window is context for browser 
  //and context is different for different JS engines like node/deno
  console.log("This is again a true statement");
}

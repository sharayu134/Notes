var name = "Hitesh"; // global

console.log("Line number 3", name);

function sayName() {
  var name = "Mr. H";// for function 
  console.log("Line number 7", name);
  sayNameTwo();

  function sayNameTwo() {
    var name = "Mr. HC"; //child
    console.log("Line number 12", name);
  }
}

sayName();  //scope chaining is like kid asking popcicle to adults
// sayNameTwo is kid who will ask sayName to give the popcicle if it doesn't have
// sayName will ask global scope to get the popcicle if it has 
// and as global is parent of these it will never ask to smallers
// sayName wwill never ask the sayNameTwo

tipper("80");

function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200");

console.log(name); //undefined
var name = "hitesh";

function sayName() {
  var name = "MR. H";
  console.log(name);
}
sayName();//MR. H

console.log(name); //hitesh

// VVIMP thing about hoisting 

//  -> global contexts scans and makes "functions" -> "available"
//  -> global contexts scans and makes "variables" -> "undefined"

 // This is the eternal truth be it any situationS

// how to remember hoisting, hoisting is lets say we are hoisting a flag
// for us flag is function f is common
// so flag = myfuncname()
// we just hoisted a flag/ function 
// now the defination of hoisted function is wherever doesn't matter

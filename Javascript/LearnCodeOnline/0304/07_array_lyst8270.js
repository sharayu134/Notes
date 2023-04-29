var countries = ["India", "USA", "Japan", "Russia"];
// used mdn for any js documentation
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

//console.log(states[1]);

//console.log(states.length);
states[0] = "Punjab";
//console.log(states);

var user = ["hitesh", "hitesh@lco.dev", 3, 34, true];
//console.log(user);

user.pop();
user.pop();  // remove form end
//console.log(user);
user.unshift("NEW VALUE"); // add at front
//console.log(user);
user.shift(); // remove frim start
console.log(user);

console.log(user.indexOf("newyy"));

console.log(Array.from("hitesh")); // strig to array

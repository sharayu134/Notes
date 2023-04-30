// let is newer compare to var
// for javascript function is the scope but for other languages  anything having {}
// is an scope

var name = "hitesh";

if (true) {
  var lastName = "Choudhary";  //therefore here "if" is not scope in javascript sp var lastname is global
}
console.log(lastName); // this will print

// as js was build as a UI language it did not need to throw error when scope issue, it will just give undefined
// but as js was used in backend llater time it needed to throw the error hence let was invented


if (true) {
  let lastName = "Choudhary";  //therefore here "if" is not scope in javascript sp var lastname is global
}
console.log(lastName); // now accessing let lastName outside will throw error as any backend language 
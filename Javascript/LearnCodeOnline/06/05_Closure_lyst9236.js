// sayFirstName() -> calling and executing function
// sayFirstName; referencing to function 

function init() {
  var firstName = "hitesh";
  function sayFirstName() {
    console.log(firstName);
  }
  sayFirstName();
}

init();
// first there is  global scope then we call the init() then there is inint() scope on top of global,
//  then init() calls the sayFirstName() so now there is sayFirstName function on top of it, 
// once sayFirstName is executed puff it's gone once init() is executed puff its gone





// function init() {
//   var firstName = "hitesh";
//   console.log("I am init");

//   function sayFirstName() {
//     console.log(firstName);
//   }
//   return sayFirstName;  // HERE WE MADE DIFFERENCE IN ABOVE APPROACH BY REFERENCING IT 
// }                       // SO NOW IT WILL GET REFERENCED AND RETURNED BUT IT WILL NOT 
                           //  BE EXECUTED WHEN in INIT ALSO INIT IS RETURNING SAYFIRSTNAME<
                          //  SO EVEN IF AT THE END OF THE INIT() WE MIGHT THINK IT"S DONE EXECUTED
                          // BUT AS SAYFIRSTNAME IS TO BE EXECUTED INIT() IS NOT PUFF YET 
                          // IT HAS PURPOSE TO SERVE

// var value = init();

// value(); // NOW HERE WILL ALL GET XECUTED AND COMPLETE

function doAddition(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5));
//doAddition()()() //curring

var testArray = [2, 4, 6, 3, 1, 5, 9, 8];

//console.log(testArray.fill("empty")); will fill whole array with "empty")
// testArray.fill("h", 2, 5) -> [2, 4, "h", "h", "h", 5, 9, 8]
// 2 is start  [inclusive indexes start with 0]
// 5 is end     [exclusive indexes start with 0]
const myNumber = [23, 24, 25, 55, 66, 77, 87, 98];

const result = myNumber.filter((num) => num > 55);

//console.log(result);

// Yes, Same exercise file

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

// console.log(users.slice(1,3)); // slice is like cuttting cake and taking it's
// slice out   here 1 is start and 3 is end 
// 1 is start  [inclusive indexes start with 0]
// 3 is end     [exclusive indexes start with 0]
// ans will be ["Ted", "Sam", "Sor", "Sod"];


var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
splice is at position 1 add two element and remove three elemnst
users.splice(1, 3, "HI", "BYE");
// users.splice()  ["Ted", "HI", "BYE", "Sor", "Sod"];
console.log(users); 

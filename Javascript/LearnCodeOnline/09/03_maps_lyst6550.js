var myMap = new Map();
var map = new Map()

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cuatro");
map.set(1,"s")


console.log(myMap.forEach(values=>console.log(values))); // forEach only gives values never gives keys

// for (let key of myMap.keys()) {
//   console.log(`Key is ${key}`);
// }

// for (let value of myMap.values()) {
//   console.log(`Value is ${value}`);
// }

for (let [key, value] of myMap) {
  console.log(`Key is : ${key} and Value is ${value}`);
}

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`));

myMap.delete(2);
console.log(myMap);

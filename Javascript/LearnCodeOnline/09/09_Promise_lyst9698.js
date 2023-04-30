const uno = () => {
  return "I am One";
};

// const dos = () => {
//   setTimeout(() => {
//     return "I am two";
//   }, 3000);
// };

const dos = () => {
  return new Promise((resolve, reject) => { // a promise either get resolved or gets rejected
    setTimeout(() => {
      resolve("I am two");
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos(); 
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();
// output will be in order
// I am One
// I am Two
// I am Three

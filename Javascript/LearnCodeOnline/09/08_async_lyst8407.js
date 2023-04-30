const uno = () => {
  console.log("I am One");
};

const dos = () => {
  setTimeout(() => {
    console.log("Wooohoooo");
  }, 3000);
  console.log("I am Two");
};

const tres = () => {
  console.log("I am Three");
};

uno();
dos();
tres();

//without async output will be
I am One
I am Two
I am Three
Wooohoooo
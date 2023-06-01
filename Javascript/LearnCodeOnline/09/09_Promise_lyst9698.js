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

// Promise is to be resolved or rejected 
const p = new Promise((resolve, reject )=>{
    a = 1+3;
    if(a===2){
        resolve("message")
    }else{
        reject("erro")
    }
})

// once resolved or rejected use .then() and catch()
p.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})

// Process a bunch or array
const p = new Promise((resolve, reject )=>{
    a = 1+1;
    if(a===2){
        resolve("message")
    }else{
        reject("erro")
    }
})
const p1 = new Promise((resolve, reject )=>{
    a = 1+1;
    if(a===2){
        resolve("message1")
    }else{
        reject("erro")
    }
})
const p2 = new Promise((resolve, reject )=>{
    a = 1+1;
    if(a===2){
        resolve("message2")
    }else{
        reject("erro")
    }
})

Promise.all(
    [p,p1,p2]
).then((msg)=>{ console.log(msg)}   )

// output
// D:\LEARNING\javascript\HTMLCSSJSBASIC Layout>node ext.js
// message
// [ 'message', 'message1', 'message2' ]
  
  
Promise.race(
    [p,p1,p2]
).then((msg)=>{ console.log(msg)}   )
// output
// D:\LEARNING\javascript\HTMLCSSJSBASIC Layout>node ext.js
// message


//  nested promise

function p(inp){
    return new Promise((resolve, reject )=>{
    a = 1+inp;
    if(a===2){
        resolve(2)
    }else{
        reject("error")
    }
})}
function p1 (inp){
    return new Promise((resolve, reject )=>{
    a = 1+inp;
    if(a===3){
        resolve(3)
    }else{
        reject("error")
    }
})}


p(1).then((res)=>{
    return p1(res);
}).then((re)=>{
    console.log(re)
}).catch((er)=>{
    console.log(er)
})

// just replace with async await
const dumb = async function myfunc(){
    try{
        let j = await p(1)
        let o = await p1(j)
        console.log(o)
    }catch{
        console.log("error")
    }
   
}
// with async await always use try catch to handle error

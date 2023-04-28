undefined   {variable which is notgiven a value but defined var myVariable; - and this is never assigned a value }
null     { is when we are supposed to get the value from somewhere but we did not receive it, like fx rate came null from service // intentional absence of any object value }  
0       { zero is zero number zero}
''      { empty string }
NAN    { https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN#:~:text=NaN%20is%20a%20property%20of,the%20case%2C%20avoid%20overriding%20it.
        Failed number conversion (e.g. explicit ones like parseInt("blabla"), Number(undefined), or implicit ones like Math.abs(undefined))}

var user = "2";

if (2 == user) {
  console.log("Condition is true");
} //prints it and its called coercion

if (2 == user) {
  console.log("Condition is true");
} //it will not print the statement this is why we use ===

// console.log("2" + "2");

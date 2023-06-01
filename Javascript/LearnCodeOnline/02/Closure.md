```
var a = "sasa";

var funcy = function(var1){
  console.log(var1);
  console.log(a);
}

```
* Here even if a is outside of the function, function can access the variable a which is the concept of closure 
* To recall this closure is bandh in marathi -> tar mag inner function che outer function kinva variable sobat bandhan ahe je scope chya file madjye ahe 
* sagle child parant che variable/function access karu shaktat pn parent karu shakat nhi
* so most commonly used closure comcept is a function inside if a function where inner variable can access everything from outer function -> for inner function outer function is everything !!

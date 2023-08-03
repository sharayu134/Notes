
Employee id,address, salary 

1. get by id -> /employee/{employeeId}
2. create employee -> /employee post method {
    salary : 20,
    adress : ""
} 
{
    message : "failed",
    status : "
    data:{
        id:1,
    salary : 20,
    adress : ""
} 
}
3. update employee put  -> /employee/{employeeId}  {
    salary : 80,
    adress : ""
} 
4. delete employee /employee/{employeeId}
5. get all employee /employee

2. var book = {
name: "Just React",
year:2022
}
var nextBook = book;
book.year = 2023;
console.log(nextBook);
{
    name: "Just React",
    year:2023
    }

    {

        var s ="k";
        function myfunc(){
            console.log(s); 
            s="j"
            return function(){
                console.log(s)
            }
        }
    }
    new Promise((resolve,reject)=>{
        
    })
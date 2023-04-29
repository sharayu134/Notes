var user = {
  firstName: "Hitesh", // here key is never a string in object
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]); // but here user[lastName] will give you error

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);
console.table(user);

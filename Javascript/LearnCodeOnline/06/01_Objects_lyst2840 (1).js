var User = function (firstName, courseCount) { // this is prototyping 
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

User.prototype.getFirstname = function () { //like getter and setter 
  console.log(`Your firstname is : ${this.firstName}`);
};

var hitesh = new User("hitesh", 2);// this will create "new" instance of user and assign the value
hitesh.getCourseCount();

if (hitesh.hasOwnProperty("firstName")) {
  hitesh.getFirstname();
}

//console.log(hitesh);

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
//console.log(sam);

// Prototyping 
// is related to objects
// object in js is like 
User  = {
  name : "sharayu",
  lastname : "yadav"
}
// prototyping can make it reusable
var user = function(name, lName){
  name: this.name,
  lName: this.lName
}
prasad = new user("prasad", "marne")
// you can add getter and setter as well
User.prototype.getFirstname = function () { //like getter and setter 
  console.log(`Your firstname is : ${this.firstName}`);
};

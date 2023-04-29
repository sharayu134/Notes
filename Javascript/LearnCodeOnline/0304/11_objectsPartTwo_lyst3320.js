var user = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) { //yeaah th object litrally has function inside  it
    this.courseList.push(courseName); // here "this" is user, the scope for buyCourse
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("Angular course"); // function can be accessed as same as others in object
console.log(user.getCourseCount());

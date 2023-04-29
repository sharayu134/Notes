const hitesh = {
  firstName: "Hitesh",
  lastName: "Choudhary",
  role: "Admin",
  courseCount: 3,
  getInfo: function () { // THIS can be reused by some other object
    console.log(`
        First name is ${this.firstName} //as here this is pointing to hitesh but as it's generic we will bind it to anything
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// hitesh.getInfo();

// var djInfo = hitesh.getInfo.bind(dj); // making getInfo point ot dj using bind, bind will return refrence
// djInfo(); // so in the end we have to execute it bind will return refrence

hitesh.getInfo.call(dj); 

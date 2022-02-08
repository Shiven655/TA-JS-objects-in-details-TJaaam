// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

//prototypal

function createObj(name, id, noOfProjects) {
  let obj = Object.create(createObj.prototype);
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  return obj;
}
createObj.prototype = {
  getProjects: function () {
    return this.name;
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  incrementProject: function (num) {
    return (this.noOfProjects = this.noOfProjects + num);
  },
  decrementProject: function (num) {
    return (this.noOfProjects = this.noOfProjects - num);
  },
};

//Pseudoclassical
function CreateObj(name, id, noOfProjects) {
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects;
}
CreateObj.prototype = {
  getProjects: function () {
    return this.name;
  },
  changeName: function (newName) {
    return (this.name = newName);
  },
  incrementProject: function (num) {
    return (this.noOfProjects = this.noOfProjects + num);
  },
  decrementProject: function (num) {
    return (this.noOfProjects = this.noOfProjects - num);
  },
};

//class
class CreateObj {
  constructor(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }

  getProjects() {
    return this.name;
  }
  changeName(newName) {
    return (this.name = newName);
  }
  incrementProject(num) {
    return (this.noOfProjects = this.noOfProjects + num);
  }
  decrementProject(num) {
    return (this.noOfProjects = this.noOfProjects - num);
  }
}
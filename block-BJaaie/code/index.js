/*animal*/

//Pseudoclassical Pattern

function Animal(location, numberOfLegs) {
  this.location = location;
  this.numberOfLegs = numberOfLegs;
}
Animal.prototype = {
  eat: function () {
    console.log(`I live in ${this.location} and I can eat`);
  },
  changeLocation: function (newLocation) {
    this.location = newLocation;
    return this.location;
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs}`;
  },
};
// Class Pattern

// class Animal {
//   constructor(location, numberOfLegs) {
//     this.location = location;
//     this.numberOfLegs = numberOfLegs;
//   }

//   function() {
//     console.log(`I live in ${this.location} and I can eat`);
//   }
//   changeLocation(newLocation) {
//     this.location = newLocation;
//     return this.location;
//   }
//   summary() {
//     return `I live in ${this.location} and I have ${this.numberOfLegs}`;
//   }
// }

/*dog*/

//Pseudoclassical Pattern

function Dog(location, numberOfLegs, name, color) {
  Animal.call(this, location, numberOfLegs);
  this.name = name;
  this.color = color;
}
Dog.prototype = {
  bark: function () {
    console.log(`I am ${this.name} and I can bark 🐶`);
  },
  changeName: function (newName) {
    this.name = newName;
    return this.name;
  },
  changeColor: function (newColor) {
    this.color = color;
    return this.color;
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`;
  },
};
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

//DOG class
class Dog extends Animal {
  constructor(location, numberOfLegs, name, color) {
    super(location, numberOfLegs);
    this.name = name;
    this.color = color;
  }

  bark() {
    console.log(`I am ${this.name} and I can bark 🐶`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColor(newColor) {
    this.newColor = newColor;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and I am of ${this.newColor} color. I can also bark`;
  }
}
/*cat*/

//Pseudoclassical Pattern

class Cat extends Animal {
  constructor(location, numberOfLegs, name, colorOfEyes) {
    super(location, numberOfLegs);
    this.name = name;
    this.colorOfEyes = colorOfEyes;
  }

  meow() {
    console.log(`I am ${this.name} and I can do mewo meow 😹`);
  }
  changeName(newName) {
    this.name = newName;
    return this.name;
  }
  changeColorOfEyes(newColor) {
    this.color = color;
    return this.color;
  }
  summary() {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`;
  }
}
Object.setPrototypeOf(Cat.prototype, Animal.prototype);
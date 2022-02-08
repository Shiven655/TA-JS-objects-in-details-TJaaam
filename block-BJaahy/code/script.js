class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    set fullName(name) {
      if (name.length < 5) {
        alert(`Full name should be more than 5 characters`);
      } else {
        let fName = this.name.split(" ")[0];
        let lName = this.name.split(" ")[1];
        this.fName = fName;
        this.lName = lName;
        return `${this.fName} ${this.lName}`;
      }
    }
    nameContains(string) {
      return `${this.firstName} ${this.lastName}`.includes(string);
    }
    calcArea() {
      return this.width * this.height;
    }
  
    static isEqual(a, b) {
      return a.width * a.height == b.width * b.height;
    }
  }
class chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }
  constructor({ newColor = "orange" } = {}) {
    this.newColor = newColor;
  }
}

const myChameleon = new chameleon({ newColor: "orange" });

// not callable on instances of the class.
// to solve this we can directly call on the class

console.log(chameleon.colorChange("green")); // will return "green"

console.log(myChameleon.newColor); // will return "orange"

console.log(chameleon.newColor); // will return "orange"

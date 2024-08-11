function herro() {
  this.make = "Mohmmmad Harish";
  return {
    make: "Ifa don",
  };
}

// returned obj has preference

const myhero = new herro();

console.log(myhero.make); // Ifa don

function Name(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
const Mx = new Name("Mr", "x"); // {fname: Mr , lname: x}
const Sx = Name("Mr", "y"); // undefined fn is not returning anything
console.log(Mx);
console.log(Sx);

// phases of event propagation
// capturing then targeting then bubbling

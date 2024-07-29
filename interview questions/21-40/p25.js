const language = { name: "React" };

function getLibrary(ver) {
  return `Library: ${this.name} version ${ver}`;
}

console.log(getLibrary.call(language, 18));
console.log(getLibrary.bind(language, 18));

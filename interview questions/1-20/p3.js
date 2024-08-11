const income = {
  skills: 10,
  monthly() {
    return this.skills * 12;
  },
  yearly: () => this.skills * 100,
};

console.log("Monthly" + income.monthly());
// in normal function this refers to the current object

console.log("Yearly" + income.yearly());
// in arrow function this refers to the  the parent scope

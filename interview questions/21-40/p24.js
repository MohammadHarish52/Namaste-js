const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 22;
// {[`object Object`]:"22"}
a[c] = 99;

console.log(a[b]);

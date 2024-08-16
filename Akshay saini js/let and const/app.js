// 1. let and const are hoisted but its memory is allocated
// at other place than window which cannot be accessed before initialisation.

// 2. var can be used to declare variables in any scope,
// even outside of function or block scopes.

// 2. Temporal Dead Zone exists until variable is declared
// and assigned a value.

// 3. window.variable OR this.variable will not give value
//of variable defined using let or const.

// 4. We cannot redeclare the same variable with
// let/const(even with using var the second time).

// 5. const variable declaration and initialization
// must be done on the same line.

// 6. There are three types of error:
// [1] referenceError {given where variable does not have memory allocation}
// [2] typeError {given when we change type that is not supposed to be changed}
// [3] syntaxError {when proper syntax(way of writing a statement) is not used}.

// 7. Use const wherever possible followed by let,
// Use var as little as possible(only if you have to). It helps avoid error.

// 8. Initialising variables at the top is good idea,
// helps shrinks TDZ to zero.

// shortest js program is an empty js program 
// whwnever we run an empty js file the js itself creates a global object window which can be different names provided anything which goes 
// inside the global space , gets into the window object for eg

let a = 10;
function hello(){

    let b = 10;

}
console.log(window.a);
//or
console.log(this.a);
//or
console.log(a);
// refers to the same thing ie the global object itself
// anything which lies outside of a function stays in the global scope and hence if we try to access
console.log(b);

//this will give error

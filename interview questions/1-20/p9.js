function show() {
  console.log(show.timeout);
  console.log(show.name);
}
show(); // uundefined show

show.timeout = 100;
show.name = "Harish";
show.timeout = 200;
show.name = "Ifa";

show(); // 200 show // name is the value of function
// name is a built-in property of the function object that holds the name of the function.

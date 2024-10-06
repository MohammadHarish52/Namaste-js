// "use strict";
y = 3.24; // shows var behavior

// strict in local scope
fn();
function fn() {
  "use strict";
  x = 3.33;
}
// eval in js , evaluates values as string

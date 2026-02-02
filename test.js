// function foo() {
//     'use strict';
  const obj = {
    a: 10,
    foo() {
      setTimeout(function () {
        console.log(this.a);
      }, 0);
    }
  };
  obj.foo();
// }

// foo();

// export default foo;

// "use strict";

Promise.resolve().then(function () {
  console.log(this.a);
});
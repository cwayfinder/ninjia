var R = {
  _: {},
  bind: function (fn, context) {
    var fixedArgs = Array.prototype.slice.call(arguments, 2);

    return function () {
      var args = Array.prototype.slice.call(arguments);
      var counter = 0;
      var merged = fixedArgs.map(function (item) {
        var result = item;
        if (item === R._) {
          result = args[counter];
          counter++;
        }

        return result;
      });
      var rest = args.slice(counter);

      fn.apply(context, merged.concat(rest));
    };
  }
};


function g(a, b, c) {
  console.log(this, a, b, c);
}

var p1 = R.bind(g, 1, 2, 3, R._);
p1() // → 1, 2, 3, undefined
p1(4) // → 1, 2, 3, 4
var p2 = R.bind(g, 20, R._, 2, 3);
p2() // → 1, undefined, 2, 3
p2(4) // → 1, 4, 2, 3
var p3 = R.bind(g, 30, R._, R._);
p3() // → 1, undefined, undefined, undefined
p3(4) // →  1, 4, undefined, undefined
p3(4, 5) // → 1, 4, 5, undefined
p3(4, 5, 6) // → 1, 4, 5, 6


// function myBind(fn, newThis) {
//   var args1 = Array.prototype.slice.call(arguments, 2);
//
//   return function () {
//     var args2 = Array.prototype.slice.call(arguments);
//     fn.apply(newThis, args1.concat(args2));
//   };
// }
//
// var originalFn = function () {
//   console.log(this.foo, arguments);
// };
// var context = { foo: 'bar' };
//
// var boundFn = myBind(originalFn, context, 3, 4);
//
// boundFn(5, 6, 7, 8);

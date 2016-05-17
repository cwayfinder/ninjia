function myBind(fn, newThis) {
  var args1 = Array.prototype.slice.call(arguments, 2);

  return function () {
    var args2 = Array.prototype.slice.call(arguments);
    fn.apply(newThis, args1.concat(args2));
  };
}

var originalFn = function () {
  console.log(this.foo, arguments);
};
var context = { foo: 'bar' };

var boundFn = myBind(originalFn, context, 3, 4);

boundFn(5, 6, 7, 8);

function myBind(fn, newThis) {
  // return fn.bind(newThis);

  return function () {
    fn.apply(newThis, arguments);
  };
}

myBind(function () {
  console.log(this.foo, arguments);
}, { foo: 'bar' })(5, 6, 7, 8);

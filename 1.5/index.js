function clone(obj) {
  if (typeof obj === 'object') {
    return Object.keys(obj).reduce(function reducer(acc, key) {
      var result = acc; // introduce a new variable to avoid the ESLint error according to the no-param-reassign rule
      result[key] = clone(obj[key]);
      return result;
    }, {});
  }

  return obj;
}

console.log(clone({ a: undefined }));
console.log(clone({ a: 3, b: 5, c: 9 }));
console.log(clone({ a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 }));

var a = { a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 };
var b = clone(a);
console.log(b === a);

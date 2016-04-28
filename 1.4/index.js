function equals(a, b) {
  var callback;

  if (a === b) return true;

  if (typeof a === 'object') {
    callback = function (key) {
      return equals(a[key], b[key]);
    };
    return Object.keys(a).every(callback) && Object.keys(b).every(callback);
  }

  return false;
}

console.log(equals({ a: 3, b: 5, c: 9 }, { a: 3, b: 5, c: 9 })); // true
console.log(equals({ a: 3, b: 5, c: 9 }, { a: 3, b: 5, c: 9 })); // false
console.log(equals({ a: 3, b: { 5: 'c', s: 5 }, c: 9 }, { a: 3, b: { u: 8, 5: 'c', s: 5 }, c: 9 })); // true
console.log(equals({ a: 3, b: { u: 8, 5: 'c', s: 7 }, c: 9 }, { a: 3, b: { u: 8, 5: 'c', s: 7 }, c: 9 })); // false
console.log(equals({ a: [5, 2, 3, 5, 7, 9], c: 8, s: 6 }, { a: [1, 2, 3, 5, 7, 9], c: 8, s: 6 })); // true
console.log(equals({ a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 }, { a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 })); // true

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

console.log(clone({ a: 3, b: 5, c: 9 }));
console.log(clone({ a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 }));

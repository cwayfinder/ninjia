function search(needle, haystack) {
  if (needle === haystack) return true;

  if (Array.isArray(haystack)) {
    return haystack.some(function (item) {
      return search(needle, item);
    });
  }

  if (typeof haystack === 'object') {
    return Object.keys(haystack).some(function (key) {
      return search(needle, haystack[key]);
    });
  }

  return false;
}

console.log(search(5, { a: 3, b: 5, c: 9 })); // true
console.log(search('5', { a: 3, b: 5, c: 9 })); // false
console.log(search(5, { a: 3, b: { u: 8, 5: 'c', s: 5 }, c: 9 })); // true
console.log(search(5, { a: 3, b: { u: 8, 5: 'c', s: 7 }, c: 9 })); // false
console.log(search(5, { a: [1, 2, 3, 5, 7, 9], c: 8, s: 6 })); // true
console.log(search(5, { a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 })); // true

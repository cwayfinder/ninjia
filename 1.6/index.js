function isInt(n) {
  return parseInt(n, 10) === +n;
}

function formatKey(key) {
  return isInt(key) ? '[' + key + ']' : key;
}

function joinKey(parent, child) {
  return child.startsWith('[') ? (parent + child) : (parent + '.' + child);
}

function search(needle, haystack) {
  var result = false;

  Object.keys(haystack).forEach(function (key) {
    var found;

    if (needle === haystack[key]) {
      result = formatKey(key);
    } else if (typeof haystack[key] === 'object') {
      found = search(needle, haystack[key]);
      if (found) {
        result = joinKey(formatKey(key), found);
      }
    }
  });

  return result;
}

console.log(search(5, { a: 3, b: 5, c: 9 })); // 'b'
console.log(search('5', { a: 3, b: 5, c: 9 })); // false
console.log(search(5, { a: 3, b: { u: 8, 5: 'c', s: 5}, c: 9 })); // 'b.s'
console.log(search(5, { a: 3, b: { u: 8, 5: 'c', s: 7 }, c: 9 })); // false
console.log('--->', search(5, { a: [1, 2, 3, 5, 7, 9], c: 8, s: 6 })); // 'a[3]'
console.log(search(5, { a: [1, 2, { s: 4, c: { u: 5 } }], s: 9 })); // 'a[2].c.u'

// console.log(isInt(2))

function f(str) {
  var prepared = str.toLowerCase().replace(/[^a-z]/g, '');

  var quantityMap = Array.prototype.reduce.call(prepared, function countChars(acc, char) {
    var result = acc;
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
    return result;
  }, {});

  return Object.keys(quantityMap).map(function obj2arr(key) {
    return quantityMap[key];
  }).sort(function compareNumbers(a, b) {
    return b - a;
  }).reduce(function sumBeauty(acc, val, index) {
    return acc + val * (26 - index);
  }, 0);
}

console.log(f('ABbCcc')); // 152
console.log(f('Good luck in the Facebook Hacker Cup this year!')); // 754
console.log(f('Ignore punctuation, please :)')); // 491
console.log(f('Sometimes test cases are hard to make up.')); // 729
console.log(f('So I just go consult Professor Dalves')); // 646

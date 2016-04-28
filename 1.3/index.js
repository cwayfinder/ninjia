function calc(n1, op, n2, n3) {
  var map = {
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; }
  };

  return map[op](n1, n2) === n3;
}


console.log(calc(1, '+', 2, 3));
console.log(calc(2, '-', 8, -5));

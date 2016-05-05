function countDecimals(number) {
  if (Math.floor(number) === number) return 0;
  return number.toString().split('.')[1].length || 0;
}

function calc(n1, op, n2, n3) {
  var map = {
    '+': function (a, b) { return a + b; },
    '-': function (a, b) { return a - b; },
    '*': function (a, b) { return a * b; },
    '/': function (a, b) { return a / b; }
  };

  var decimals = Math.max(countDecimals(n1), countDecimals(n2));
  var modifier = Math.pow(10, decimals);

  return map[op](n1 * modifier, n2 * modifier) / modifier === n3;
}


console.log(calc(1, '+', 2, 3));
console.log(calc(0.1, '+', 0.2, 0.3));
console.log(calc(2, '-', 8, -5));

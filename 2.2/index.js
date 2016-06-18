function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function rpn(args) {
  var ops = {
    '+': function (a, b) { return a + b; },
    '*': function (a, b) { return a * b; },
    '-': function (a, b) { return a - b; },
    '/': function (a, b) { return a / b; }
  };

  var stack = [];
  var i;
  var item;

  for (i = 0; i < args.length; i++) {
    item = args[i];
    if (isNumeric(item)) {
      stack.push(item);
    } else if (stack.length >= 2) {
      stack.push(ops[item](stack.pop(), stack.pop()));
    } else {
      return false;
    }
  }

  return stack.length === 1 ? stack[0] : false;
}


console.log(rpn([1, 2, '+'])); // 3
console.log(rpn([1, 2, '+', 5, '*'])); // 15
console.log(rpn([1, 2, '+', 5])); // false
console.log(rpn([1, 2, '+', '*'])); // false
console.log(rpn([1, 2, 3, '*', '+'])); // 7

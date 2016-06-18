function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isOperator(char) {
  return '*/+-'.indexOf(char) !== -1;
}

function split(str) {
  return str.split(/([\s+\(\)])/)
    .filter(function (item) {
      return item.trim();
    });
}

function hasLowerPriorityThen(a, b) {
  var precedence = {
    '/': 3,
    '*': 3,
    '+': 2,
    '-': 2
  };

  return isOperator(a) && isOperator(b) && precedence[a] <= precedence[b];
}

function convert(str) {
  var output = [];
  var stack = [];
  var infix = split(str);
  var i;

  for (i = 0; i < infix.length; i++) {
    var token = infix[i];
    if (isNumeric(token)) {
      output.push(token);
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      while (stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      stack.pop();
    } else if (isOperator(token)) {
      while (hasLowerPriorityThen(token, stack[stack.length - 1])) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }

  output = output.concat(stack.reverse());

  return output.join(' ');
}


console.log('\n\n' + convert('-11 + 2.5 * 3'));
console.log('\n\n' + convert('3 + 4 * 2 / (1 - 5)'));
// console.log('\n\n' + convert('3 + 4 * 2 / (1 - 5)'));

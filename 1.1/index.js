function isPrime(number) {
  var sqrt;
  var i;

  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }

  sqrt = Math.sqrt(number);
  for (i = 3; i <= sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function reverse(str) {
  return Array.prototype.reduce.call(str, function(result, char) {
    return char + result;
  }, '');
}

function decrement(number) {
  var str = String(number);

  var halfSize = Math.ceil(str.length / 2);
  var first = String(parseInt(str.substr(0, halfSize), 10) - 1);
  var second = reverse(first.substr(0, halfSize - 1));

  return Number(first + second);
}

function biggestPrimePalindrome(size) {
  var result;
  var maxSize = size;
  var i;

  if (size % 2 === 0) {
    maxSize = size - 1;
  }

  for (i = maxSize; i > 0; i -= 2) {
    result = parseInt('9'.repeat(i), 10);

    while (result > 0) {
      if (isPrime(result)) {
        return result;
      }
      result = decrement(result);
    }
  }

  return result;
}

console.log('biggest', biggestPrimePalindrome(1));
console.log('biggest', biggestPrimePalindrome(9));

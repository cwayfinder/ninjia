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

function getMutablePart(str) {
  var halfSize = Math.floor(str.length / 2);

  var result;
  var i;
  for (i = 0; i <= halfSize; i++) {
    result = str.substr(halfSize - i, 1 + (i * 2));
    if (parseInt(result, 10)) {
      break;
    }
  }
  return result;
}

function decreaseFirstAndLastDigit(str) {
  var char = str.charAt(0) - 1;

  var result = char + str.substr(1);
  if (str.length > 1) {
    result = result.substr(0, str.length - 1) + char;
  }

  return result;
}

function replaceMiddle(str, middle) {
  var offset = (str.length - middle.length) / 2;
  return str.substr(0, offset) + middle + str.substr(-offset);
}

function decrease(number) {
  var result = String(number);
  var middle = getMutablePart(result);

  middle = decreaseFirstAndLastDigit(middle);

  if (result.length > middle.length) {
    result = replaceMiddle(result, middle);
  } else {
    result = middle;
  }
  return Number(result);
}

function biggestPrimePalindrome(size) {
  var result;
  var maxSize = size;
  var i;

  if (size % 2 === 0) {
    maxSize = size - 1;
  }

  for (i = maxSize; i > 0; i -= 2) {
    result = '9'.repeat(i);

    while (parseInt(result, 10)) {
      if (isPrime(result)) {
        return result;
      }
      result = decrease(result);
    }
  }

  return result;
}

console.log('biggest', biggestPrimePalindrome(9));

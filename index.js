function isPrime(number) {
  // Задание №1. Напишите функцию isPrime, которая получает на вход число
  // и возвращает true если число ПРОСТОЕ и false если число СОСТАВНОЕ или 1
  // Пожалуйста, не гуглите решение задания

  // Замените код ниже на ваш код
  // return false;

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
  for (i = 3; i < sqrt; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function generateTable() {
  // Задание №2. Напишите функцию generateTable, которая генерирует на выходе
  // таблицу умножения от 1 до 9. Другими словами результат должен выглядеть так:
  // (одной строкой, со вставленными переносами строк)
  //
  //  1  2  3  4  5  6  7  8  9
  //  2  4  6  8 10 12 14 16 18
  //  3  6  9 12 15 18 21 24 27
  //  4  8 12 16 20 24 28 32 36
  //  5 10 15 20 25 30 35 40 45
  //  6 12 18 24 30 36 42 48 54
  //  7 14 21 28 35 42 49 56 63
  //  8 16 24 32 40 48 56 64 72
  //  9 18 27 36 45 54 63 72 81
  //
  // Обратите внимание на ПРОБЕЛЫ, которые вставлены перед числами меньше 10 чтоб таблица смотрелась красиво
  // Конечно же взять и "забить" эту таблицу в JS - не то решение, которое я от Вас жду
  // Пожалуйста, не гуглите решение задания

  //Замените код ниже на ваш код


  // return ' 1  2  3  4  5  6  7  8  9\n 2  4  6  8 10 12 14 16 18';

  var result = [];
  var i;
  var j;
  var row;
  var number;

  for (i = 1; i <= 9; i++) {
    row = [];
    for (j = 1; j <= 9; j++) {
      number = i * j;
      if (number < 10) {
        number = ' ' + number;
      }
      row.push(number);
    }
    result.push(row.join(' '));
  }

  return result.join('\n');
}

function reverse(str) {
  // Задание №3. Напишите функцию reverse которая получает на вход строку и переворачивает ее
  // Пожалуйста, не гуглите решение задания
  // Для особо умных: функцией reverse массива пользоваться запрещено

  //Замените код ниже на ваш код

  var result = '';
  var i;

  for (i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

function decrease(number) {
  var result = String(number);

  var halfSize = Math.floor(result.length / 2);

  var replacement;
  var i = 0;
  for (i = 0; i < halfSize; i++) {
    replacement = result.substr(halfSize - i, 1 + (i * 2));
    //console.log(result.substr(0, halfSize - i), replacement, result.substr(halfSize + 1 + i));
    if (parseInt(replacement)) {
      break;
    }
  }

  replacement = (replacement.charAt(0) - 1) + replacement.substr(1);
  if (replacement.length > 1) {
    replacement = replacement.substr(0, replacement.length - 1) + (replacement.charAt(replacement.length - 1) - 1);
  }

  var offset = (result.length - replacement.length)/2;
  result = result.substr(0, offset) + replacement + result.substr(-offset);
  return Number(result);
}

function biggestPrimePalindrome(size) {
  // Задание №4. Самое сложное. Если вы только пришли в мир JS и не успеете решить его до субботы - не расстраивайтесь.
  // Но очень постарайтесь :)

  // Вам подается на вход в size длина числа. Ваша задача найти МАКСИМАЛЬНОЕ простое число-палиндром заданной длины
  // (палиндром - строка которая читается задом наперед так же как и передом назад :))
  // К примеру size = 3. Простыми Числами палиндромами будут 101, 121, 131 и т.д. Ответом (результатом) будет 929 -
  // последнее простое трехзначное число палиндром

  // Пожалуйста, не гуглите решение задания
  // Конечно же вы можете использовать функции isPrime и reverse написанные выше
  // Не передавайте size больше 10 - ваш компьютер уж очень крепко задумается

  // Код этой функции я хочу увидеть, когда вы решите эту задачу
  // Скопируйте код функции, откройте gist.github.com, вставьте его туда
  // В поле имени файла введите index.js
  // Нажмите "create secret gist"
  // Получившуюся ссылку (взять из адресной строки), пришлите мне с почты, на которую вы получили это задание
  // на mentor@javascript.ninja с темой письма
  // Basic2#1.1


  //Замените код ниже на ваш код
  // return -1;

  if (size % 2 == 0) {
    size--;
  }

   var result = '9'.repeat(size);
  //var result = Number('99999');

  // var middle = result[size];
  // result[size] = result[size]--;

  while (!isPrime(result)) {
    //console.log('tick', result);
    result = decrease(result);
  }

  return result;
}

 console.log('biggest', biggestPrimePalindrome(7));
//console.log('decrease', decrease(9990999))

function leftPad(number, padSize) {
  var pad = ' '.repeat(padSize);
  var str = String(number);
  return pad.length > str.length ? pad.substring(str.length) + str : str;
}

function generateTable(cols, rows) {
  var result = [];
  var padSize = String(cols * rows).length;
  var i;
  var j;
  var row;

  for (i = 1; i <= rows; i++) {
    row = [];
    for (j = 1; j <= cols; j++) {
      row.push(leftPad(i * j, padSize));
    }
    result.push(row.join(' '));
  }

  return result.join('\n');
}

console.log(generateTable(9, 37));

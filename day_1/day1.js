const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  const array = data.toString().split('\n');

  let sum = 0;
  let arraySum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== '') {
      sum += Number(array[i]);
    }
    if (array[i] === '') {
      arraySum.push(sum);
      sum = 0;
    }
  }
  console.log(arraySum);
  const result = arraySum.reduce((prev, curr, index) =>
    prev > curr ? prev : curr
  );
  const sorted = arraySum.sort((a, b) => b - a);
  console.log(arraySum[0] + arraySum[1] + arraySum[2]);
});

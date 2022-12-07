const fs = require('fs');
const path = require('path');
const { resourceLimits } = require('worker_threads');
const pathFile = path.join(__dirname, 'input.txt');

//lines of characters
//half of each line has a common character
//priority : a-z 1-26
//proirity: A-Z 27-52

//** https://theasciicode.com.ar/ascii-printable-characters/lowercase-letter-a-minuscule-ascii-code-97.html */

fs.readFile(pathFile, (err, data) => {
  if (err) throw err;
  const array = data.toString().split('\n');
  let result = [];
  let result2 = [];
  let sum = 0;
  array.forEach((element) => {
    const firstHalf = element.slice(0, element.length / 2);
    const secondHalf = element.slice(element.length / 2, element.length);
    for (let i = 0; i < secondHalf.length; i++) {
      if (secondHalf.includes(firstHalf[i])) {
        result.push(firstHalf[i]);
        break;
      }
    }
  });

  result.forEach((i, index) =>
    i.charCodeAt(0) - 64 > 26
      ? (sum += i.charCodeAt(0) - 64 - 32)
      : (sum += i.charCodeAt(0) - 64 + 26)
  );
  //Part 2
  for (let i = 0; i < array.length; i += 3) {
    result2.push([array[i], array[i + 1], array[i + 2]]);
  }
  console.log(result2.length);
  let finalResult = [];
  for (let i = 0; i < result2.length; i++) {
    for (let j = 0; j < result2[i][1].length; j++) {
      if (
        result2[i][0].includes(result2[i][1][j]) &&
        result2[i][2].includes(result2[i][1][j])
      ) {
        finalResult.push(result2[i][1][j]);
        break;
      }
    }
  }
  let sumPart2 = 0;
  console.log(finalResult.length);
  finalResult.forEach((i, index) =>
    i.charCodeAt(0) - 64 > 26
      ? (sumPart2 += i.charCodeAt(0) - 64 - 32)
      : (sumPart2 += i.charCodeAt(0) - 64 + 26)
  );
  console.log(sumPart2);
});

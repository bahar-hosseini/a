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
  console.log(sum);
});

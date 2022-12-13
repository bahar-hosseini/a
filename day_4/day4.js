const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, 'input.txt');

fs.readFile(pathFile, (err, data) => {
  if (err) throw err;
  let answerPart1 = 0;
  let answerPart2 = 0;
  const array = data.toString().split('\n');

  for (let item of array) {
    let i = item.split(/[-,]/);
    if (
      (Number(i[0]) <= Number(i[2]) && Number(i[1]) >= Number(i[3])) ||
      (Number(i[2]) <= Number(i[0]) && Number(i[3]) >= Number(i[1]))
    ) {
      answerPart1 += 1;
    }
    if (
      (Number(i[0]) <= Number(i[2]) && Number(i[1]) >= Number(i[3])) ||
      (Number(i[2]) <= Number(i[0]) && Number(i[3]) >= Number(i[1])) ||
      (Number(i[0]) <= Number(i[3]) && Number(i[1]) >= Number(i[2]))
    ) {
      answerPart2 += 1;
    }
  }
  console.log(answerPart1);
  console.log(answerPart2);
});

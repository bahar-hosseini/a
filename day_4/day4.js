const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, 'input.txt');

fs.readFile(pathFile, (err, data) => {
  if (err) throw err;
  let answer = 0;
  const array = data.toString().split('\n');

  for (let item of array) {
    let i = item.split(/[-,]/);
    if (
      (Number(i[0]) <= Number(i[2]) && Number(i[1]) >= Number(i[3])) ||
      (Number(i[2]) <= Number(i[0]) && Number(i[3]) >= Number(i[1]))
    ) {
      answer += 1;
    }
  }
  console.log(answer);
});

const fs = require('fs');
const path = require('path');
const pathFile = path.join(__dirname, 'input.txt');

fs.readFile(pathFile, (err, data) => {
  if (err) throw err;
  const array = data.toString().split('\n');
  console.log(array);
});

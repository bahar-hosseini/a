const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'input.txt');

fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  const array = data.toString().split('\n');
  //PART 1
  let my_score = 0;
  let score_part2 = 0;
  for (let i of array) {
    if (i[2] === 'X' && i[0] === 'A') {
      my_score += 4;
      score_part2 += 3;
    } else if (i[2] === 'X' && i[0] === 'B') {
      my_score += 1;
      score_part2 += 1;
    } else if (i[2] === 'X' && i[0] === 'C') {
      my_score += 7;
      score_part2 += 2;
    } else if (i[2] === 'Y' && i[0] === 'A') {
      my_score += 8;
      score_part2 += 4;
    } else if (i[2] === 'Y' && i[0] === 'B') {
      my_score += 5;
      score_part2 += 5;
    } else if (i[2] === 'Y' && i[0] === 'C') {
      my_score += 2;
      score_part2 += 6;
    } else if (i[2] === 'Z' && i[0] === 'A') {
      my_score += 3;
      score_part2 += 8;
    } else if (i[2] === 'Z' && i[0] === 'B') {
      my_score += 9;
      score_part2 += 9;
    } else if (i[2] === 'Z' && i[0] === 'C') {
      my_score += 6;
      score_part2 += 7;
    }
  }
  //Part1:
  console.log(my_score);
  console.log(score_part2);
});

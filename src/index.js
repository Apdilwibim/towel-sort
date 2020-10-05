
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) return [];
  let array = [];
  let count = 1;
  for (let item of matrix) {
    if (count % 2 == 0) item.reverse();
    for (let i = 0; i < item.length; i++) {
      array.push(item[i]);
    }
    count++;
  }
  return array;
}

var generate = function (numRows) {
  if (numRows < 1) return [[]];
  if (numRows == 1) return [[1]];
  let triangle = [[1], [1, 1]];
  if (numRows == 2) return triangle;
  else {
    for (let i = 2; i < numRows; i++) {
      addRow(triangle);
    }
  }

  function addRow(triangle) {
    let row = [1];
    let previous = triangle[triangle.length - 1];
    for (let i = 0; i < triangle.length - 1; i++) {
      let current = previous[i];
      let next = previous[i + 1];
      row.push(current + next);
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};

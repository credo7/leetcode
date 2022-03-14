var mySqrt = function (x) {
  let i = -1;
  let num = 1;
  while (i == -1) {
    if (x == num * num) return num;
    else if (x < num * num) return num - 1;
    num++;
  }
};

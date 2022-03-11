var maxSubArray = function (nums) {
  function mathMax(a, b) {
    if (a > b) return a;
    else return b;
  }

  let maxVal = nums[0];
  let acc = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const calc = mathMax(nums[i], acc + nums[i]);
    if (maxVal < calc) maxVal = calc;
    acc = calc;
  }
  return maxVal;
};

var isPalindrome = function (s) {
  let res = s.replace(/[\W_]/g, "").toLowerCase();
  let l = 0;
  let r = res.length - 1;
  while (l < r) {
    if (res[l] != res[r]) return false;
    l++;
    r--;
  }
  return true;
};

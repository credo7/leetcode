var strStr = function (haystack, needle) {
  if (haystack.length < needle.length) return -1;
  if (haystack.length == 0 || needle.length == 0) return 0;
  let index = 0;
  let streak = 0;
  let prefix = 0;
  let i = 0;
  while (i < haystack.length) {
    if (haystack[i] == needle[index]) {
      if (streak == 0) {
        prefix = i;
      }
      streak++;
      index++;
    } else {
      if (streak > 0) {
        i = prefix;
      }
      prefix = 0;
      index = 0;
      streak = 0;
    }
    i++;
    if (streak == needle.length) {
      return i - streak;
    }
  }
  return -1;
};

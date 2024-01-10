var longestCommonPrefix = function (strs) {
  // sort the array because its rearrange alphabetical order
  strs.sort();

  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) {
      return strs[0].substr(0, i);
    }
  }

  return strs[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));

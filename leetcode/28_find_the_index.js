// 28. Find the Index of the First Occurrence in a String
// Easy
// 5.3K
// 329
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  const splitedHaystack = haystack.split("");
  const splitedNeedle = needle.split("");
  let result = -1

  splitedHaystack.every((hayChar, hayIndex) => {
    if (hayChar == splitedNeedle[0]) {
      let hayIndexCount = hayIndex;
      let consecutive = true;

      splitedNeedle.every((needleChar, needleIndex) => {
        if (haystack[hayIndexCount] != needleChar) {
          consecutive = false;
          return false;
        }
        hayIndexCount += 1;
        return true
      });

      if (consecutive) {
        result = hayIndex;
        return false
      }
    }
    return true
  });

  return result;
};

console.log(strStr("leetcode", "leeto"));
console.log(strStr("sadbutsad", "sad"));

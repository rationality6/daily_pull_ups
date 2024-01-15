// 3005. Count Elements With Maximum Frequency
// User Accepted:13786
// User Tried:14468
// Total Accepted:14357
// Total Submissions:20447
// Difficulty:Easy
// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.

// Example 1:

// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:

// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

const nums = [1, 2, 2, 3, 1, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */

function generateHashMap(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return map;
}

var maxFrequencyElements = function (nums) {
  const map = generateHashMap(nums);

  // Find the maximum frequency among all elements
  let max = 0;
  for (let frequency of map.values()) {
    max = Math.max(max, frequency);
  }

  let res = 0;
  for (let frequency of map.values()) {
    if (frequency === max) {
      res += frequency;
    }
  }
  return res;
};

// console.log(maxFrequencyElements([1, 2, 3, 4, 5]));
// console.log(maxFrequencyElements([10, 12, 11, 9, 6, 19, 11]));
console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));

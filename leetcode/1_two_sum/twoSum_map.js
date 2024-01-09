// 1. Two Sum
// Easy
// 53.7K
// 1.8K
// Companies
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

class TwoSumSolver {
  constructor(nums, target) {
    this.nums = nums;
    this.target = target;

    this.map = new Map();
  }

  perform() {
    let result;

    this.nums.forEach((num, index) => {
      let complement = this.target - num;
      exist_in_map = this.map.get(complement) != undefined;
      if (exist_in_map && map.get(complement) != index) {
        result = [map.get(complement), index];
      }
      this.map.set(num, index);
    });
    return result;
  }
}

/**
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let twoSum = function (nums, target) {
  const twoSumSolver = new TwoSumSolver(nums, target);
  return twoSumSolver.perform();
};

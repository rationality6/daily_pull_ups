// 20. Valid Parentheses
// Easy
// 23K
// 1.6K
// Companies
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} str
 * @return {boolean}
 */
var isValid = function (str) {
  // let isStringValid = true;
  let stackArray = [];
  const splitedStr = str.split("");

  const matchHash = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  splitedStr.forEach((i) => {
    if (stackArray.length === 0) {
      stackArray.push(i);
    } else {
      const shouldMatchSymbol = matchHash[stackArray[stackArray.length - 1]];
      if (shouldMatchSymbol === i) {
        stackArray.pop();
      } else {
        stackArray.push(i)
      }
    }
  });

  console.log(stackArray)

  if (stackArray.length === 0) {
    return true
  } else {
    return false
  }
  
};

console.log(isValid("()"));
console.log(isValid("()}"));
console.log(isValid("()[]{}"));
console.log(isValid("([{}])"));

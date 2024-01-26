// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => [...Array(n).keys()].map((i) => i + 1).reverse()

// const reverseSeq = (n) => {
//   let result = []
//   for (let i = n; 0 < i; i -= 1) {
//     result.push(i)
//   }
//   return result
// };

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("reverseSeq", function() {
//   it("Sample Test", function() {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });

console.log(reverseSeq(5));

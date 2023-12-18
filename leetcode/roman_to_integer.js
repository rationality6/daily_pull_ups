const roman_table = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let roman_array = s.split("");
  let result_counter = 0;

  for (let i = roman_array.length - 1; i >= 0; i -= 1) {
    if (4 * roman_table[roman_array[i]] < result_counter) {
      result_counter -= roman_table[roman_array[i]];
    } else {
      result_counter += roman_table[roman_array[i]];
    }
  }

  return result_counter;
};

console.log(romanToInt("III"));

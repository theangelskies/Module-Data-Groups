/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Parameterized test cases
const cases = [
  { input: [], expected: 0, description: "empty array" },
  { input: [42], expected: 42, description: "array with one number" },
  {
    input: [10, -5, -3],
    expected: 2,
    description: "array with negative numbers",
  },
  {
    input: [1.5, 2.25, 0.25],
    expected: 4,
    description: "array with decimal numbers",
  },
  {
    input: ["hey", 10, "hi", 60, 10],
    expected: 80,
    description: "array with non-number values",
  },
  {
    input: ["a", null, undefined, "b"],
    expected: 0,
    description: "array with only non-number values",
  },
];

test.each(cases)(
  "given $description, returns $expected",
  ({ input, expected }) => {
    expect(sum(input)).toBe(expected);
  }
);

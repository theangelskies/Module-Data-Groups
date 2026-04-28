/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");
const cases = [
  { input: [], expected: -Infinity, description: "empty array" },
  { input: [42], expected: 42, description: "array with one number" },
  {
    input: [-10, 0, 5, 20, -30],
    expected: 20,
    description: "array with both positive and negative numbers",
  },
  {
    input: [-100, -50, -3, -20],
    expected: -3,
    description: "array with only negative numbers",
  },
  {
    input: [1.5, 2.75, 2.74],
    expected: 2.75,
    description: "array with decimal numbers",
  },
  {
    input: ["hey", 10, "hi", 60, 10],
    expected: 60,
    description: "array with non-number values",
  },
  {
    input: ["a", "b", null, undefined],
    expected: -Infinity,
    description: "array with only non-number values",
  },
];

test.each(cases)(
  "given $description, returns $expected",
  ({ input, expected }) => {
    expect(findMax(input)).toBe(expected);
  }
);

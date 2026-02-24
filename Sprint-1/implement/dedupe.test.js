const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

const cases = [
  { input: [], expected: [], description: "empty array" },
  {
    input: [1, 2, 3],
    expected: [1, 2, 3],
    description: "array with no duplicates",
  },
  {
    input: ["a", "a", "b"],
    expected: ["a", "b"],
    description: "array with duplicate strings",
  },
  {
    input: [1, 1, 2, 2, 3],
    expected: [1, 2, 3],
    description: "array with duplicate numbers",
  },
  {
    input: [5, 1, 1, 2, 3, 2, 5, 8],
    expected: [5, 1, 2, 3, 8],
    description: "array with mixed duplicates preserving first occurrence",
  },
];

test.each(cases)(
  "given $description, returns deduplicated array",
  ({ input, expected }) => {
    const output = dedupe(input);
    expect(output).toEqual(expected);

    // For the "no duplicates" case, check that a new array is returned
    if (
      input.length === expected.length &&
      input.every((v, i) => v === expected[i])
    ) {
      expect(output).not.toBe(input);
    }
  }
);

const invert = require("./invert.js");

describe("invert", () => {
  test("swaps keys and values in an object", () => {
    const input = { x: 10, y: 20 };

    const result = invert(input);

    expect(result).toEqual({
      10: "x",
      20: "y",
    });
  });

  test("works with a single key-value pair", () => {
    const input = { a: 1 };

    const result = invert(input);

    expect(result).toEqual({
      1: "a",
    });
  });

  test("returns an empty object when given an empty object", () => {
    expect(invert({})).toEqual({});
  });

  test("handles multiple entries correctly", () => {
    const input = { a: 1, b: 2, c: 3 };

    const result = invert(input);

    expect(result).toEqual({
      1: "a",
      2: "b",
      3: "c",
    });
  });
});

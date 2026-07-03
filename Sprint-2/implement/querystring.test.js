// In the prep, we implemented a function to parse query strings.
// Unfortunately, it contains several bugs!
// Below is one test case for an edge case the implementation doesn't handle well.
// Fix the implementation for this test, and try to think of as many other edge cases as possible - write tests and fix those too.

const parseQueryString = require("./querystring.js");

describe("parseQueryString", () => {
  test("parses querystring values containing =", () => {
    expect(parseQueryString("equation=x=y+1")).toEqual({
      equation: "x=y+1",
    });
  });

  test("parses multiple key value pairs", () => {
    expect(parseQueryString("name=John&age=30")).toEqual({
      name: "John",
      age: "30",
    });
  });

  test("returns an empty object for an empty string", () => {
    expect(parseQueryString("")).toEqual({});
  });

  test("returns an empty object when input is undefined", () => {
    expect(parseQueryString(undefined)).toEqual({});
  });

  test("handles keys without values", () => {
    expect(parseQueryString("flag")).toEqual({
      flag: "",
    });
  });

  test("handles keys with empty values", () => {
    expect(parseQueryString("name=")).toEqual({
      name: "",
    });
  });

  test("handles multiple parameters where one has no value", () => {
    expect(parseQueryString("a=1&b&c=3")).toEqual({
      a: "1",
      b: "",
      c: "3",
    });
  });

  test("ignores trailing &", () => {
    expect(parseQueryString("a=1&b=2&")).toEqual({
      a: "1",
      b: "2",
    });
  });

  test("handles repeated keys by keeping the last value", () => {
    expect(parseQueryString("a=1&a=2")).toEqual({
      a: "2",
    });
  });
});

const createLookup = require("./lookup.js");

describe("createLookup", () => {
  test("creates a country currency code lookup for multiple codes", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
    ];

    const result = createLookup(input);

    expect(result).toEqual({
      US: "USD",
      CA: "CAD",
    });
  });

  test("returns an empty object when given an empty array", () => {
    expect(createLookup([])).toEqual({});
  });

  test("returns an empty object for invalid input", () => {
    expect(createLookup(null)).toEqual({});
    expect(createLookup("not an array")).toEqual({});
  });

  test("ignores entries that are not arrays", () => {
    const input = [["US", "USD"], "invalid", ["CA", "CAD"], 123];

    expect(createLookup(input)).toEqual({
      US: "USD",
      CA: "CAD",
    });
  });

  test("handles duplicate country codes by keeping the last value", () => {
    const input = [
      ["US", "USD"],
      ["CA", "CAD"],
      ["US", "USDT"],
    ];

    expect(createLookup(input)).toEqual({
      US: "USDT",
      CA: "CAD",
    });
  });
});

function createLookup(pairs) {
  if (!pairs || typeof pairs[Symbol.iterator] !== "function") {
    return {};
  }

  const lookup = {};

  for (const pair of pairs) {
    if (Array.isArray(pair) && pair.length === 2) {
      const [countryCode, currencyCode] = pair;
      lookup[countryCode] = currencyCode;
    }
  }

  return lookup;
}

module.exports = createLookup;

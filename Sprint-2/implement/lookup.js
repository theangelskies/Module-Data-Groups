function createLookup(pairs) {
  // Guard against invalid input
  if (!Array.isArray(pairs)) {
    return {};
  }

  return pairs.reduce((lookup, pair) => {
    if (Array.isArray(pair) && pair.length === 2) {
      const [countryCode, currencyCode] = pair;
      lookup[countryCode] = currencyCode;
    }
    return lookup;
  }, {});
}

module.exports = createLookup;

function parseQueryString(queryString) {
  const queryParams = {};

  if (!queryString) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    // Skip empty pairs (e.g. trailing &)
    if (!pair) continue;

    const equalsIndex = pair.indexOf("=");

    // Handle keys without "=" (e.g. "?flag")
    if (equalsIndex === -1) {
      queryParams[pair] = "";
      continue;
    }

    const key = pair.slice(0, equalsIndex);
    const value = pair.slice(equalsIndex + 1);

    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;

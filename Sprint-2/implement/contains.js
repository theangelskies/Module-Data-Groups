function contains(obj, property) {
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(obj, property);
}

module.exports = contains;

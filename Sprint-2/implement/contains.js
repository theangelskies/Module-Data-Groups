function contains(obj, property) {
  // Return false if obj is not a plain object or is null
  if (obj === null || typeof obj !== "object" || Array.isArray(obj)) {
    return false;
  }

  // Check if the property exists on the object
  return Object.prototype.hasOwnProperty.call(obj, property);
}

module.exports = contains;

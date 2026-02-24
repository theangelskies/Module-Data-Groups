function sum(elements) {
  return elements.reduce(
    (total, element) => (typeof element === "number" ? total + element : total),
    0
  );
}

module.exports = sum;

module.exports = function multiply(first, second) {
  let result = String(BigInt(first) * BigInt(second));
  return result;
}

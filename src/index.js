let b;
module.exports = function reverse (n) {
  b = Number([...Math.abs(n).toString()].reverse().join(""));
  return b;
}

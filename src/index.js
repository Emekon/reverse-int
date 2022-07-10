let b;
module.exports = function reverse (n) {
  b = Number([...n.toString()].reverse().join(""));
  return b;
}

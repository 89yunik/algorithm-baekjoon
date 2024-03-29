let [a, b, c] = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
  .map(e => e.split(' ').map(Number))
// const ccw = (a, b, c) =>
//   (a[0] - b[0]) * (a[1] - c[1]) - (a[1] - b[1]) * (a[0] - c[0])
const ccw = (b[1] - a[1]) * (b[0] - c[0]) - (b[0] - a[0]) * (b[1] - c[1])
console.log(ccw < 0 ? -1 : ccw > 0 ? 1 : 0)

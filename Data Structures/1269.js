const I = require('fs')
  .readFileSync('./dev/stdin')
  .toString()
  .trim()
  .split('\r\n')
// const I = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const C = new Set(I[1].split(' '))
I[2].split(' ').forEach(e => (C.has(e) ? C.delete(e) : C.add(e)))
console.log(C.size)

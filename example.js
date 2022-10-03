const fs = require('fs')
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\r\n')
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [A, B] = input[0].split(' ').map(e => Number(e))

const max = Math.floor(Math.sqrt(B))
const pNum = []
const visited = new Array(max + 1).fill(false)
visited[0] = true
visited[1] = true
let i = 2
for (let i = 2; i < max + 1; i++) {
  if (visited[i]) continue
  visited[i] = true
  pNum.push(i)
  for (let j = 2; i * j < max + 1; j++) visited[i * j] = true
}

let answer = 0
for (const prime of pNum) {
  let candidate = prime * prime
  while (candidate <= B) {
    if (candidate >= A) answer++
    candidate *= prime
  }
}
console.log(answer)

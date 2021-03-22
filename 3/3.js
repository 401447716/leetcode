'use strict'
function fn (s) {
  let max = 0;
  let t = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (map[s[j]]) {
        console.log(s[j])
        if (max < t) {
          max = t;
        }
        map = {};
        map[s[j]] = true;
        t = 1
      } else {
        map[s[j]] = true
        t++
      }
    }
    if (t > max) max = t
  }
  return max
}

console.log(fn("asjrgapa"))
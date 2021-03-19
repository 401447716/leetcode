'use strict'
function fn (arr, target) {
  let map = new Map();
  for (let i in arr) {
    map.set(arr[i], i);
  }
  let t = 0
  for (let i in arr) {
    if (t = map.get(target - arr[i])) {
      if (+t !== +i) {
        return [+i, +t]
      }
    }
  }
}

var arr1 = [2,7,11,15];
var target1 = 9;
console.log(fn(arr1, target1));

var arr2 = [3, 2, 4];
var target2 = 6;
console.log(fn(arr2, target2));

var arr3 = [3, 3];
var target3 = 6;
console.log(fn(arr3, target3));
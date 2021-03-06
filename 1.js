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

/*
1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例 2：
输入：nums = [3,2,4], target = 6
输出：[1,2]

示例 3：
输入：nums = [3,3], target = 6
输出：[0,1]
 
提示：
2 <= nums.length <= 103
-109 <= nums[i] <= 109
-109 <= target <= 109
只会存在一个有效答案
 */
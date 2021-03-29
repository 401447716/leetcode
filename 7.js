'use strict'
function reverse (num) {
  if (num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)) {
    return 0
  }
  let p = num > 0 ? 1 : -1
  let result = 0;
  while (num !== 0) {
    result *= 10;
    result += num % 10;
    num = parseInt(num / 10);
  }
  if ((p > 0 && result < 0) || (p < 0 && result > 0)) {
    result *= -1;
  }
  return result
}
console.log(reverse(-123))
/*
给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
假设环境不允许存储 64 位整数（有符号或无符号）。

示例 1：
输入：x = 123
输出：321

示例 2：
输入：x = -123
输出：-321

示例 3：
输入：x = 120
输出：21

示例 4：
输入：x = 0
输出：0
*/
'use strict'
function fn (s) {
  let n = s.length;
  let dp = [[]];
  let ans = '';
  for (let l = 0; l < n; ++l) {
    for (let i = 0; i + l < n; ++i) {
      let j = i + l;
      if (!dp[i]) { dp[i] = [] }
      if (l == 0) {
        dp[i][j] = true;
      } else if (l == 1) {
        dp[i][j] = (s.charAt(i) == s.charAt(j));
      } else {
        dp[i][j] = (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]);
      }
      if (dp[i][j] && l + 1 > ans.length ) {
        ans = s.substring(i, i + l + 1);
      }
    }
  }
  return ans;
}
console.log(fn('abad'))
/*
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

示例 2：
输入：s = "cbbd"
输出："bb"

示例 3：
输入：s = "a"
输出："a"

示例 4：
输入：s = "ac"
输出："a"
*/
'use strict'
function convert (s, numRows) {
  let num = 0;
  let table = [];
  let i = 0;
  let j = 0;
  let index = numRows - 1
  for (let i = 0; i < numRows; i++) { table.push([]) };
  while (num < s.length) {
    if (index === numRows - 1 || index === 0 || i === index) {
      table[i++][j] = s[num++]
    } else {
      i++
    }
    if (i === numRows) {
      j++;
      i = 0;
      index--;
      if (index < 0) {
        index = numRows > 1 ? numRows - 2 : 0
      }
    }
  }
  return (table.flat(Infinity).join(''));
}
console.log(convert('PAYPALISHIRING', 3));
/*
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。
比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。
请你实现这个将字符串进行指定行数变换的函数：
string convert(string s, int numRows);
示例 1：
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"

示例 2：
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I

示例 3：
输入：s = "A", numRows = 1
输出："A"
*/
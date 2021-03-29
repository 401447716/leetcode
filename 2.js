'use strict'
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
function fn (l1, l2) {
  let addOther = 0
  let head = new ListNode(0, null)
  let p = head
  let l1_p = l1
  let l2_p = l2;
  while (l1_p !== null && l2_p !== null) {
    p.next = new ListNode(l1_p.val + l2_p.val + addOther, null)
    p = p.next
    addOther = parseInt(p.val / 10)
    p.val = p.val % 10
    l1_p = l1_p.next
    l2_p = l2_p.next
  }
  while (l1_p !== null) {
    p.next = new ListNode(l1_p.val + addOther, null)
    p = p.next
    addOther = parseInt(p.val / 10)
    p.val = p.val % 10
    l1_p = l1_p.next
  }
  while (l2_p !== null) {
    p.next = new ListNode(l2_p.val + addOther, null)
    p = p.next
    addOther = parseInt(p.val / 10)
    p.val = p.val % 10
    l2_p = l2_p.next
  }
  if (addOther) {
    p.next = new ListNode(addOther, null)
  }
  return head.next
}

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]
console.log(fn(l1, l2))

/*
2. 两数相加
给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
 
提示：
每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
*/
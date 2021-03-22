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
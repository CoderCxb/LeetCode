// 面试题 02.02.实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

// 注意：本题相对原题稍作改动

// 示例：

// 输入： 1->2->3->4->5 和 k = 2
// 输出： 4
// 说明：

// 给定的 k 保证是有效的。

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
*/
var kthToLast = function (head, k) {
  let workNode = head;
  while (k--) {
    workNode = workNode.next;
  }
  while (workNode.next && head.next) {
    head = head.next;
    workNode = workNode.next;
  }
  return head.val;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);
console.log(kthToLast(l, 1));



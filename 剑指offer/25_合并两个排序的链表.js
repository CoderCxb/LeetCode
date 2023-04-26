// 剑指 Offer 25. 合并两个排序的链表
// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let res = new ListNode(0);
  let workNode = res;
  while (l1 || l2) {
    if ((l1 && l2 && l1.val <= l2.val) || (l1 && !l2)) {
      workNode.next = l1;
      workNode = l1;
      l1 = l1.next;
    } else if ((l1 && l2 && l1.val > l2.val) || (l2 && !l1)) {
      workNode.next = l2;
      workNode = l2;
      l2 = l2.next;
    }
  }
  return res.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(3);
l2.next = new ListNode(5);
l2.next.next = new ListNode(6);

console.log(mergeTwoLists(l1, l2));

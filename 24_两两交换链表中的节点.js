// 24. 两两交换链表中的节点

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

// 思路1: 直接遍历链表 调用两个节点,并移动到最新的位置,如此循环即可

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode|null}
 */
var swapPairs = function (head) {
  // 1. 特殊情况
  if (!head) return null;
  // 2. 返回的值
  let result = new ListNode(0);
  result.next = head;
  // 3. 移动的节点
  let moveNode = result;
  // 4. 判断条件 必须后面存在两个节点才调用
  while (moveNode.next && moveNode.next.next) {
    // 5. 单数节点
    const odd = moveNode.next;
    // 6. 双数节点
    const even = moveNode.next.next;
    // 7. 双数节点提前
    moveNode.next = even;
    // 8. 双数节点的next接到单数节点的next
    odd.next = even.next;
    // 9. 双数的next改为单数节点
    even.next = odd;
    // 10. 移动moveNode到最新的节点 即odd
    moveNode = odd;
  }
  // 11. 返回结果
  return result.next;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
console.log(swapPairs(l));

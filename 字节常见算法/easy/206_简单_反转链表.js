// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let result = null;
  let workNode = head;
  while(workNode){
    let nextNode = workNode.next;
    workNode.next = result;
    result = workNode;
    workNode = nextNode;
  }
  return result;
};

let head = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1 ,new ListNode(0))))))

console.log(reverseList(head));
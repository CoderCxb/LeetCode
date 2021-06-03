
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 思路
// 1. 记开头到环入口节点距离为a,入口节点 到 快慢指针交点距离为b, 交点到入口节点距离为c
// 第二圈必定相遇  慢指针 2(a+b)=a+2b+c 快指针
// 因此 a=c，所以 从交点处和head以一样的速度同时出发，遇到时就是入口节点 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head) return null;
  let slow=head,fast=head;
  while(fast!=null&&fast.next!=null){
      slow=slow.next;
      fast=fast.next.next;
      if(slow===fast){
          let ptr = head;
          while (ptr !== slow) {
              ptr = ptr.next;
              slow = slow.next;
          }
          return ptr;
      }
  }
  return null;
};

let node = new ListNode(3);
let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = node;
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);
l.next.next.next.next.next = node;

console.log(detectCycle(l));
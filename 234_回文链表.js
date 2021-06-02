// 234. 回文链表
// 请判断一个链表是否为回文链表。

// 示例 1:

// 输入: 1->2
// 输出: false
// 示例 2:

// 输入: 1->2->2->1
// 输出: true

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let strArr=[];
  while(head){
    strArr.push(head.val);
    head=head.next;
  }
  let left=0,right=strArr.length-1;
  for (;left<=right;left++,right--) {
    if(strArr[left]!==strArr[right]){
      return false;
    }
  }
  return true;
};
let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(2);
// l.next.next.next = new ListNode(1);
// l.next.next.next.next = new ListNode(1);
console.log(isPalindrome(l));
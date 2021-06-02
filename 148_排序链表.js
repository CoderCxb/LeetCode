// 148. 排序链表
// 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

// 进阶：

// 你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

// 输入：head = [4,2,1,3]
// 输出：[1,2,3,4]

// 输入：head = [-1,5,3,4,0]
// 输出：[-1,0,3,4,5]

// 思路:归并排序+快慢指针

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// 合并两个升序的链表
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode} 
 */
function mergeSortedList(l1,l2){
  let result=new ListNode();
  let moveNode=result;
  while(l1||l2){
    if(l1&&l2){
      if(l1.val>l2.val){
        moveNode.next=l2;
        l2=l2.next;
      }else{
        moveNode.next=l1;
        l1=l1.next;
      }
    }else if(l1){
      moveNode.next=l1;
      l1=l1.next;
    }else{
      moveNode.next=l2;
      l2=l2.next;
    }
    moveNode=moveNode.next;
  }
  return result.next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  // 1. 特殊情况返回
  if(!head||!head.next){
    return head;
  }
  // 2. 初始化 
  // fast走到底以后 slow就是第二段链表的开头
  // preSlow是用于将第一段的尾部节点 用于断开(.next置于null)
  // head则一直指向第一段的首部
  let slow=head.next,fast=head.next,preSlow=head;
  // 3. 遍历 
  // 当fast走完 这是slow走了一半
  while(fast&&fast.next){
    // 记录第一段链表的尾节点
    preSlow=slow;
    // slow一次走一步  fast一次走两步 
    slow=slow.next;
    fast=fast.next.next;
  }
  // 4. 断开两段链表
  preSlow.next=null;
  // 5. 合并有序链表 sortList不断递归 最深层时,合并的就是两个节点
  return mergeSortedList(sortList(head),sortList(slow))
};

let l = new ListNode(1);
l.next = new ListNode(5);
l.next.next = new ListNode(2);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(3);

console.log(sortList(l));
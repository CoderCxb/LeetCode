// 21. 合并两个有序链表

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  let result=new ListNode(0);
  let moveNode=result;
  while(l1||l2){
    if(l1&&l2){
      if(l1.val>=l2.val){
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
};

let l1 = new ListNode(0);
l1.next = new ListNode(3);
l1.next.next = new ListNode(4);

let l2 = new ListNode(0);
l2.next = new ListNode(2);
l2.next.next = new ListNode(5);

console.log(mergeTwoLists(l1,l2));
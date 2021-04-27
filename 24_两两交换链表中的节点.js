// 24. 两两交换链表中的节点

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

// 输入：head = [1,2,3,4]
// 输出：[2,1,4,3]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
*/
var swapPairs = function(head) {
  let nodes=[];
  while(head){
    nodes.push(head)
    head=head.next;
  }
  for (let index = 0; index < nodes.length; index++) {
    let node;
    if(index%2===1){
      node=nodes[index];
      nodes[index]=nodes[index-1];
      nodes[index-1]=node;
    }else{
      node=nodes[index];
    }
  }
  return nodes.reduceRight((pre,next)=>{
    next.next=pre;
    return next;
  },null)
};

let l = new ListNode(0);
l.next=new ListNode(1);
l.next.next=new ListNode(2);
l.next.next.next=new ListNode(3);
l.next.next.next.next=new ListNode(4);
console.log(swapPairs(l));
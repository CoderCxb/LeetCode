// 21. 合并两个有序链表

// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。  当返回一个新的链表时，可以直接创建一个链表，然后不断往其后添加节点 然后返回该节点的后一个节点即可。

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// 思路: 新建1个链表(两个变量 一个不动的-存储初始位置 用于返回  一个会动的-用于不断的新增节点) 然后通过判断传入的两个链表 不断向该节点后面添加节点 然后返回 

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
  //  1. 新建链表 用于返回 
  let result=new ListNode(0);
  // 2. 不断移动的节点
  let moveNode=result;
  // 3. 遍历
  while(l1||l2){
    // 4. 情况一 两个节点都有值
    if(l1&&l2){
      // 5. 比大小 小的那个节点向后移动 并赋值
      if(l1.val>=l2.val){
        moveNode.next=l2;
        l2=l2.next;
      }else{
        moveNode.next=l1;
        l1=l1.next;
      }
    // 6. 其中一个存在 则存在的向后移动 并赋值
    }else if(l1){
      moveNode.next=l1;
      l1=l1.next;
    }else{
      moveNode.next=l2;
      l2=l2.next;
    }
    // 6. moveNode需要不断的向后移动 才可以生成链表
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
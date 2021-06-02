// 160. 相交链表
// 编写一个程序，找到两个单链表相交的起始节点。

// 如下面的两个链表：
// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Reference of the node with value = 8
// 输入解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。

function ListNode(val) {
    this.val = val;
    this.next = null;
}


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//   let map=new Map();
//   while(headA){
//     map.set(headA,true)
//     headA=headA.next;

//   }    
//   while(headB){
//     if(map.get(headB)){
//       return headB;
//     }
//     headB=headB.next;
//   }
//   return null;
// };

// 双指针 + 方程式
// 假设链表a和链表b相交的部分长度为 x
// 链表a中不相交的部分长度为 al, b中不相交的部分长度为 bl
// 可以获得等式 (al+x+bl)+x = (bl+x+al)+x
// a和b的长度不重要了 因为括号中的长度相等了 接下去就可以获取到相交的部分了

var getIntersectionNode = function(headA, headB) {
  if(!headA||!headB){
    return null;
  }
  let a=headA,b=headB;
  // 1. 不等则不交
  while(a!==b){
    // 2. 当a遍历结束时,将b接入后面
    a=a===null?headB:a.next;
    // 3. 当b遍历结束时,将a接入后面
    b=b===null?headA:b.next;
  }
  // 4. 返回结果
  return a;
};

let publicList=new ListNode(7);
publicList.next=new ListNode(8);
publicList.next.next=new ListNode(9);
publicList.next.next.next=new ListNode(10);

let l1=new ListNode(1);
l1.next=new ListNode(3);
l1.next.next=publicList;

let l2=new ListNode(2);
l2.next=new ListNode(4);
l2.next.next=new ListNode(6);
l2.next.next.next=publicList;


console.log(getIntersectionNode(l1,l2));
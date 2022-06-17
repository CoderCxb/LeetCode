// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let result = null;
  let workNode = null;
  if(list1 && !list2) return list1;
  if(!list1 && list2) return list2;
  while(list1 || list2){
    if(list1 && list2){
      let minNode;
      if(list1.val >= list2.val){
        minNode = list2;
        list2 = list2.next;
      }else{
        minNode = list1
        list1 = list1.next;
      }
      if(workNode){
        workNode.next = minNode;
        workNode = workNode.next;
      }else{
        workNode = minNode;
        result = minNode;
      }
    }else if(list1){
      workNode.next = list1;
      workNode = workNode.next;
      list1 = list1.next;
    }else{
      workNode.next = list2;
      workNode = workNode.next;
      list2 = list2.next;
    }
  }
  return result;
};

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)))

console.log(mergeTwoLists(null, list2));
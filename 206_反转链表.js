// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 通过递归,head.next.next=head,将下一个节点的next设置为自己并返回,完成反转

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	// 1. head==null为特殊情况 head.next==null 递归结束
	if (head == null || head.next == null) {
		return head;
	}
	// 2. 递归并返回结果,last一直指向最后一个节点
	let last = reverseList(head.next);
	// 3. 调换两个节点的位置
	head.next.next = head;
	// 4. 清除head.next, 不然会出现循环指向
	head.next = null;
	// 5. 返回结果
	return last;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.log(reverseList(l));

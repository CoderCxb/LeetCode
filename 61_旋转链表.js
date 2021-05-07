// 61. 旋转链表

// 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

// 输入：head = [1,2,3,4,5], k = 2
// 输出：[4,5,1,2,3]

// 思路:先遍历一次,计算链表长度,还能获取最后一个节点,然后将头尾相连,形成一个闭环,再遍历到需要断开的地方,将首尾断开

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode | null}
 */
var rotateRight = function (head, k) {
	// 1. 特殊情况直接返回
	if (head == null || head.next == null || k == 0) {
		return head;
	}
	// 2. 先遍历一次,循环结束后n为链表长度,preHead指向尾节点
	let preHead = head;
	let n = 1;
	while (preHead && preHead.next) {
		preHead = preHead.next;
		n++;
	}
	// 3. 此时head还指向头部,将preHead.next指向head,即头尾相连
	preHead.next = head;
	// 4. 先使用%得到k需要移动的次数,n-k表示需要移动到断点需要的次数
	k %= n;
	k = n - k;
	// 5. 移动到断点
	while (k--) {
		preHead = preHead.next;
	}
	// 6. 从断点出将循环链表断开
	head = preHead.next;
	preHead.next = null;
	// 7. 返回head,此时的head是断点的下一个节点
	return head;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.time('a');
console.log(rotateRight(l, 1));
console.timeEnd('a');
// rotateRight(l, 6);

// 92. 反转链表 II

// 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

// 链表思路都差不多:除了递归以外 可以使用数组存储,然后对部分进行反转之后再和前后进行拼接

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode|null}
 */
var reverseBetween = function (head, left, right) {
	// 1. 将链表的节点存储到数组中
	let nodeArr = [];
	while (head) {
		nodeArr.push(head);
		head = head.next;
	}
	// 2. 部分反转
	let rHead = nodeArr.slice(left - 1, right).reduce((pre, next) => {
		next.next = pre;
		return next;
	}, null);
	// 3. 头尾衔接
	nodeArr[left - 1].next = nodeArr[right] ? nodeArr[right] : null;
	if (left > 1) {
		nodeArr[left - 2].next = rHead;
	}
	// 4. 返回结果
	return left === 1 ? rHead : nodeArr[0];
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.log(reverseBetween(l, 2, 5));

// 141. 环形链表

// 给定一个链表，判断链表中是否有环。

// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

// 如果链表中存在环，则返回 true 。 否则，返回 false 。

// 快慢指针:一个指针跑的快 一个指针跑的慢 如果碰到了 就说明有环

function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	// 1. 特殊情况
	if (head === null) return false;
	// 2. 初始化快慢指针 初始值是相等的
	let slow = head,
		fast = head;
	// 3. 遍历 fast
	// 因为fast走两步 因此需要确保fast.next不为null
	while (fast != null && fast.next != null) {
		// 4. slow走一步 fast走两步
		slow = slow.next;
		fast = fast.next.next;
		// 5. 相等 存在环
		if (slow === fast) {
			return true;
		}
	}
	// 6. 能出来 说明没有环
	return false;
};

let node = new ListNode(3);
let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.log(hasCycle(l));

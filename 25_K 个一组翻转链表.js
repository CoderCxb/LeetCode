// 25. K 个一组翻转链表

// 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。

// 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 思路:计数-换位-连接

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode | null}
 */
var reverseKGroup = function (head, k) {
	// 1. 初始化 count-计数器  nodeArr-每次存储k个节点
	// result-结果 preNode-上一节点
	let count = 1,
		nodeArr = [],
		result = new ListNode(0),
		preNode = result;
	// 2. 循环
	while (head) {
		// 3. 将节点添加到nodeArr
		nodeArr.push(head);
		// 4. 存储head.next  因为后续代码可能会修改到head.next
		let hNext = head.next;
		// 5. nodeArr节点个数满足k个
		if (count % k === 0) {
			// 6. 设置result的值 只有第一次满足的时候要设置
			if (count === k) {
				result = nodeArr[k - 1];
			}
			// 7. 将nodeArr的头尾节点的next进行修改
			[nodeArr[k - 1].next, nodeArr[0].next] = [
				nodeArr[0].next,
				nodeArr[k - 1].next,
			];
			// 8. 使用reduceRight对数组进行连接 preNode用于存储上一个结果的末尾节点
			preNode = nodeArr.reduceRight((pre, next) => {
				pre.next = next;
				return next;
			}, preNode);
			// 9. 清空nodeArr 重新计算
			nodeArr = [];
		}
		// 10. 遍历下一个节点 (hNext的用处就是这,如果之前不存储,会有异常)
		head = hNext;
		// 11. 计算器++
		count++;
	}
	// 12. 返回结果
	return result;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);
console.log(reverseKGroup(l, 5));

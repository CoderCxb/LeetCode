// 23. 合并K个升序链表

// 给你一个链表数组，每个链表都已经按升序排列。

// 请你将所有链表合并到一个升序链表中，返回合并后的链表。

// 示例 1：

// 输入：lists = [[1,4,5],[1,3,4],[2,6]]
// 输出：[1,1,2,3,4,4,5,6]
// 解释：链表数组如下：
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// 将它们合并到一个有序链表中得到。
// 1->1->2->3->4->4->5->6

// 思路1: 和合并两个有序链表一样,第一个和后一个生成新的链表,再跟后面的链表比较(不推荐)
// 思路2: 和数组结合,先将所有链表连接起来并转换成一个数组,然后对数组进行排序,然后再从val大的一边开始不断的串联

// 知识点: reduce和reduceRight接收的第二个参数是第一次进入时的值
// reduceRight的方向为从右向左

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode|null}
 */
var mergeKLists = function (lists) {
	// 1. 使用reduce将多个链表变成一个数组(无序的)
	return (
		lists
			.reduce((former, latter) => {
				while (latter) {
					former.push(latter);
					latter = latter.next;
				}
				return former;
			}, [])
			// 2. 对数组进行排序
			.sort((pre, next) => next.val - pre.val)
			// 3. 通过reduce将节点串联
			// 需要从val大的一边开始,默认值为null,最大值的next就是null,不断的向前串联
			// 如果要从小的一边开始,那么需要新建一个前置节点 还需要存储开头的位置 很麻烦
			// 因此选择从val大的一边开始
			.reduce((pre, next) => {
				// 4. reduceRight是从右向左,
				next.next = pre;
				return next;
			}, null)
	);
};

let l1 = new ListNode(1);
l1.next = new ListNode(3);
l1.next.next = new ListNode(4);

let l2 = new ListNode(0);
l2.next = new ListNode(2);
l2.next.next = new ListNode(5);

let l3 = new ListNode(1);
l3.next = new ListNode(11);

console.log(mergeKLists([l1, l2, l3]));

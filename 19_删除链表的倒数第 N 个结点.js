// 19. 删除链表的倒数第 N 个结点

// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 进阶：你能尝试使用一趟扫描实现吗？

// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// 1. 思路1 : 结合数组 将数组和链表绑定 然后操作数组(索引) 然后跳过要删除的节点即可
// 2. 思路2: 双指针(需要在链表前面再添加一个节点) 设置头尾两个指针 尾指针先行n次  当尾指针.next为null时 说明到末尾了 此时的头指针.next指向的就是要跳过的节点 将其跳过 返回自己添加的节点.next 即可

/**
 * 思路1：结合数组
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode|null}
 */
var removeNthFromEnd = function (head, n) {
  // 1.将每一个节点添加到数组中
  let nodeList = [head];
  while (head.next) {
    nodeList.push(head.next);
    head = head.next;
  }
  // 2. 删除第一个节点 并且只有一个节点
  if (nodeList.length === n && n === 1) return null;
  // 3. 删除第一个节点 多个节点
  if (nodeList.length === n && n !== 1) return nodeList[1];
  // 4. 其他情况时  直接通过操作数组存储的节点即可
  if (nodeList[nodeList.length - n]) {
    nodeList[nodeList.length - n - 1].next = nodeList[nodeList.length - n].next;
  }
  return nodeList[0];
};

/**
 * 思路2：双指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode|null}
 */
// var removeNthFromEnd = function (head, n) {
// 	// 1. 设置前置节点 否则无法删除第一个节点
// 	let preHead = new ListNode(0);
// 	preHead.next = head;
// 	// 2. 设置头尾指针
// 	let front = preHead,
// 		end = preHead;
// 	// 3. 尾指针先行
// 	while (n--) {
// 		end = end.next;
// 	}
// 	// 4. 头尾指针并行 end.next为false时 font.next就是要跳过的节点
// 	while (end && end.next) {
// 		front = front.next;
// 		end = end.next;
// 	}
// 	// 5. 跳过节点
// 	front.next = front.next.next;
// 	// 6. 返回节点
// 	return preHead.next;
// };
let l = new ListNode(1);
l.next = new ListNode(2);
// l.next.next = new ListNode(3);
// l.next.next.next = new ListNode(4);
// l.next.next.next.next = new ListNode(5);
console.log(removeNthFromEnd(l, 1));

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
	let prePart = null;
	let nextPart = null;
	let centerLeft = null;
	let centerRight = null;
	if (head.next == null || left === right) return head;
	function reverseN(head, n) {
		if (n === left - 1) {
			centerRight = head.next;
			prePart = head;
		}
		if (n === right) {
			console.log('!');
			centerLeft = head;
			nextPart = head.next;
			return head;
		}
		let last = reverseN(head.next, n + 1);
		if (n >= left) {
			if (head.next) {
				head.next.next = head;
			}
		}
		return last;
	}
	reverseN(head, 1);
	prePart.next = centerLeft;
	centerRight.next = nextPart;
	return head;
};

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.log(reverseBetween(l, 1, 5));

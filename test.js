function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
function reverse(head) {
	if (head.next == null) return head;
	let last = reverse(head.next);
	head.next.next = head;
	return last;
}

let l = new ListNode(1);
l.next = new ListNode(2);
l.next.next = new ListNode(3);
l.next.next.next = new ListNode(4);
l.next.next.next.next = new ListNode(5);

console.log(reverse(l));

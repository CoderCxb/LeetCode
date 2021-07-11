// 100. 相同的树
// 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
// 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var isSameTree = function (t1, t2) {
	if (t1 == t2) {
		return true;
	} else if (t1 == null || t2 == null) {
		return false;
	} else if (t1.val !== t2.val) {
		return false;
	} else {
		return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
	}
};
let t1 = new TreeNode(
	1,
	null,
	new TreeNode(2, new TreeNode(3, null, null), null)
);
let t2 = new TreeNode(
	1,
	null,
	new TreeNode(2, new TreeNode(5, null, null), null)
);

console.log(isSameTree(t1, t2));

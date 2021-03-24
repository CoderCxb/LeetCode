// 101. 对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	function recursive(left, right) {
		if (left == null && right == null) return true;
		if (!right || !left) return false;
		return (
			left.val === right.val &&
			recursive(left.left, right.right) &&
			recursive(left.right, right.left)
		);
	}
	if (root === null) return true;
	return recursive(root.left, root.right);
};

let root = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(2, new TreeNode(2, null, null), null),
		new TreeNode(2, new TreeNode(2, null, null), null)
	),
	null
);

console.log(isSymmetric(root));

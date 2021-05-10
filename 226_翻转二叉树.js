// 226. 翻转二叉树

// 翻转一棵二叉树。

// 输入：
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// 输出：
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// 思路:左右节点调换

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	if (root === null) return root;
	let left = invertTree(root.left);
	let right = invertTree(root.right);
	root.left = right;
	root.right = left;
	return root;
};

let root = new TreeNode(
	1,
	new TreeNode(3, new TreeNode(2, null, null), null),
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(invertTree(root));

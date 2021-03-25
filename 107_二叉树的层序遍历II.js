// 107. 二叉树的层序遍历 II
// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 二叉树：[3,9,20,null,null,15,7],
// 3
// / \
// 9  20
// /  \
// 15   7
// 返回其层序遍历结果：

// [
// [3],
// [9,20],
// [15,7]
// ]
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	let result = [];
	if (!root) return result;
	function recursive(root, level) {
		result[level] = result[level] ? result[level] : [];
		result[level].push(root.val);
		if (root.left) {
			recursive(root.left, level + 1);
		}
		if (root.right) {
			recursive(root.right, level + 1);
		}
	}
	recursive(root, 0);
	return result;
};

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3, null, null), null),
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(levelOrder(root));

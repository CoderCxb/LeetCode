// 104. 二叉树的最大深度

// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。
// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
	if (root === null) return 0;
	let max = 1;
	function recursive(root, level) {
		max = Math.max(level, max);
		if (root.left) {
			recursive(root.left, level + 1);
		}
		if (root.right) {
			recursive(root.right, level + 1);
		}
	}
	recursive(root, max);
	return max;
};

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3, null, null), null),
	new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(maxDepth(root));

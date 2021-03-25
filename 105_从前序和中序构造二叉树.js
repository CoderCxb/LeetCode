// 105. 从前序与中序遍历序列构造二叉树

// 根据一棵树的前序遍历与中序遍历构造二叉树。
// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 前序遍历 preorder = [3,9,20,15,7]
// 中序遍历 inorder = [9,3,15,20,7]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode|any}
 */
var buildTree = function (preorder, inorder) {
	// 当中序数组为空时 返回null (上层是叶子节点)
	if (inorder.length === 0) return null;
	// 获取前序数组的第一个元素 并删除
	// 前序数组的第一个元素 代表跟元素 通过递归 就可以对应到每个子树的根节点
	// 删除是为了让节点不断的往下移动
	let mid = preorder.splice(0, 1)[0];
	// 获取中序数组的根节点的index 将其分成左右两部分
	let midIndex = inorder.findIndex((item) => mid == item);
	// 创建根节点
	let root = new TreeNode(mid);
	// 前序和中序构造 先构造左子树
	// 节点的左子树
	root.left = buildTree(preorder, inorder.slice(0, midIndex));
	// 节点的右子树
	root.right = buildTree(preorder, inorder.slice(midIndex + 1));
	return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));

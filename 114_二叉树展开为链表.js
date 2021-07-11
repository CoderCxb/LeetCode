// 114. 二叉树展开为链表
// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

// 思路:
// 1. 递归,左右节点进行连接
// 2. 遍历,将右节点拼接到左节点后面时,需要先将左节点遍历到尾部,否则会覆盖到一部分节点(重要)

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
	// 1. 特殊情况返回
	if (root === null) return;
	// 2. 递归左右节点
	flatten(root.left);
	flatten(root.right);
	// 3. 存储左右节点
	let left = root.left;
	let right = root.right;
	// 4. 左节点置空
	root.left = null;
	// 5. 右节点
	root.right = left;
	let p = root;
	// 6. 重要:将right拼接到原本的left前,需要将root遍历到尾部,否则会发生覆盖
	// 即 将原本的right拼接到left的尾部
	while (p.right !== null) {
		p = p.right;
	}
	p.right = right;
};

let root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3, null, null), new TreeNode(4, null, null)),
	new TreeNode(5, null, new TreeNode(6, null, null))
);
flatten(root);
console.log(root);

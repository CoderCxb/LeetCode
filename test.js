// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 思路: 通过层序遍历, 当节点为叶子节点时,查看层数,并和原先最小值比较

function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if(!root)return null;
  let minDepth=Number.MAX_SAFE_INTEGER;
  function getDepth(root,level){
    if(root.left){
      getDepth(root.left,level+1);

    }
    if(root.right){
      getDepth(root.right,level+1);
    }
    if(!root.left&&!root.right){
      minDepth=Math.min(minDepth,level)
    }
  }
  let deep=1;
  getDepth(root,deep);
  return minDepth;
};

let root = new TreeNode(
	1,
	new TreeNode(
		2,
		new TreeNode(3, new TreeNode(4, new TreeNode(5, null, null), null), null),
		null
	),
	null
);
console.log(minDepth(root));

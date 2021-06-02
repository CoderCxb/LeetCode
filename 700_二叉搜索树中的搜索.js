// 700. 二叉搜索树中的搜索
// 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。 如果节点不存在，则返回 NULL。

// 搜索二叉树: 左节点<根节点<右节点

// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 返回
//   2     
//  / \   
// 1   3

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  while(root){
    if(root.val===val){
      return root;
    }else if(root.val>val){
      root=root.left
    }else{
      root=root.right;
    }
  }
  return root;
};

let root=new TreeNode(
  4,
  new TreeNode(2,
    new TreeNode(1),
    new TreeNode(3)
  ),
  new TreeNode(2)
);

console.log(searchBST(root,2));
//  实现前中后序遍历
function threeOrders( root ) {
  let result=[[],[],[]]
  function recursive(root){
      if(!root) return 
      result[0].push(root.val)
      if(root.left){
          recursive(root.left)
      }
      result[1].push(root.val)
      if(root.right){
          recursive(root.right);
      }
      result[2].push(root.val)
  }
  recursive(root);
  return result;
}
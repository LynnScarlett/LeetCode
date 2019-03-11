/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) {
    return null
  }
  let mid = preorder[0]
  let tree = new TreeNode(mid)
  var i = 0
  for (; i < preorder.length; i++) {
    if (preorder[i] > mid) {
      break
    }
  }
  tree.left = bstFromPreorder(preorder.slice(1, i))
  tree.right = bstFromPreorder(preorder.slice(i))
  return tree
};

// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {number[]} preorder
//  * @return {TreeNode}
//  */
// var bstFromPreorder = function (preorder) {
//   let tree = new TreeNode(preorder[0])
//   let treeArr = []
//   for (let i = 1; i < preorder.length; i++) {
//     let node = new TreeNode(preorder[i])
//     treeArr.push(node)
//   }
//   for (let i = 1; i < preorder.length; i++) {
//     let parent = null
//     if (treeArr[i].val < treeArr[i - 1].val) {
//       treeArr[i - 1].left = treeArr[i]
//     } else if (treeArr[i].val > treeArr[i - 1].val) {
//       treeArr[i - 1].right = treeArr[i]
//     }
//   }
// };

// considering use Recursion   search：根据前序遍历生成bst
// 时间问题未能完成
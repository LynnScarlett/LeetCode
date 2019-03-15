// /*
//  * @lc app=leetcode id=79 lang=javascript
//  *
//  * [79] Word Search
//  *
//  * https://leetcode.com/problems/word-search/description/
//  *
//  * algorithms
//  * Medium (30.47%)
//  * Total Accepted:    256.6K
//  * Total Submissions: 840.6K
//  * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
//  *
//  * Given a 2D board and a word, find if the word exists in the grid.
//  * 
//  * The word can be constructed from letters of sequentially adjacent cell,
//  * where "adjacent" cells are those horizontally or vertically neighboring. The
//  * same letter cell may not be used more than once.
//  * 
//  * Example:
//  * 
//  * 
//  * board =
//  * [
//  * ⁠ ['A','B','C','E'],
//  * ⁠ ['S','F','C','S'],
//  * ⁠ ['A','D','E','E']
//  * ]
//  * 
//  * Given word = "ABCCED", return true.
//  * Given word = "SEE", return true.
//  * Given word = "ABCB", return false.
//  * 
//  * 
//  */
// /**
//  * [["C","A","A"],["A","A","A"],["B","C","D"]]\n"AAB"
//  * @param {character[][]} board
//  * @param {string} word
//  * @return {boolean}
//  */
// var exist = function (board, word) {
//   if (word.length === 0) {
//     return true
//   }

//   let row = board.length
//   let col = (board[0] || []).length

//   function search(x, y, target) {
//     if (target.length === 0) {
//       return true
//     }
//     let tarChar = target[0]
//     if (board[x - 1]&&board[x - 1][y] === tarChar) {
//       board[x - 1][y] += ' '
//       return search(x - 1, y, target.slice(1))
//     } else if (board[x + 1]&&board[x + 1][y] === tarChar) {
//       board[x + 1][y] += ' '
//       return search(x + 1, y, target.slice(1))
//     } else if (board[x][y - 1] === tarChar) {
//       board[x][y - 1] += ' '
//       return search(x, y - 1, target.slice(1))
//     } else if (board[x][y + 1] === tarChar) {
//       board[x][y + 1] += ' '
//       return search(x, y + 1, target.slice(1))
//     } else {
//       recover()
//       return false
//     }
//   }

//   function recover() {

//     for (let i = 0; i < row; i++) {
//       for (let j = 0; j < col; j++) {
//         if (board[i][j].length > 1) {
//           board[i][j] = board[i][j][0]
//         }
//       }
//     }
//   }


//   for (let i = 0; i < row; i++){
//     for (let j = 0; j < col; j++){
//       if (board[i][j] === word[0]) {
//         board[i][j] += ' '
//         if (search(i, j, word.slice(1))) {
//           return true
//         }
//       }
//     }
//   }
//   return false
// };

// search中应把上下左右四种情况 做或运算
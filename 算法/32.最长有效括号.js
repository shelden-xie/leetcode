/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (35.30%)
 * Likes:    2591
 * Dislikes: 0
 * Total Accepted:    499.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '"(()"'
 *
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "(()"
 * 输出：2
 * 解释：最长有效括号子串是 "()"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = ")()())"
 * 输出：4
 * 解释：最长有效括号子串是 "()()"
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：s = ""
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 <= s.length <= 3 * 10^4
 * s[i] 为 '(' 或 ')'
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
    let maxLen = 0;
    const stack = [];
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      console.log(stack)
      if (c == '(') {       // 左括号的索引，入栈
        stack.push(i);
      } else {              // 遍历到右括号
        stack.pop();        // 栈顶的左括号被匹配，出栈
        if (stack.length) { // 栈未空
          const curMaxLen = i - stack[stack.length - 1]; // 计算有效连续长度
          console.log(curMaxLen,i)
          maxLen = Math.max(maxLen, curMaxLen);          // 挑战最大值
        } else {            // 栈空了
          stack.push(i);    // 入栈充当参照
        }
      }
    }
    console.log(maxLen)
    return maxLen;
  };

  longestValidParentheses(')()()(()()()')
// @lc code=end


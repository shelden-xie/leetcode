/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (34.74%)
 * Likes:    3913
 * Dislikes: 0
 * Total Accepted:    668.5K
 * Total Submissions: 1.9M
 * Testcase Example:  '"babad"'
 *
 * 给你一个字符串 s，找到 s 中最长的回文子串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "cbbd"
 * 输出："bb"
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "a"
 * 输出："a"
 *
 *
 * 示例 4：
 *
 *
 * 输入：s = "ac"
 * 输出："a"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * s 仅由数字和英文字母（大写和/或小写）组成
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 逻辑思路：首先书写判断函数判断是否是回文字符串，然后通过循环和while结合map  
// 判断如果是回文直接放入maps,取keys(),最大的值
var longestPalindrome = function (s) {
  const judgePalindrome = (s) => {
    let index = 0;
    let Palindrome = true;
    while (index < s.length) {
      if (s[index] === s[s.length - index - 1]) {
        index++;
      } else {
        Palindrome = false;
        break;
      }
    }
    return Palindrome;
  };
  let maps = new Map();
  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    let str = s[i];
    while (j < s.length) {
      str += s[j];
      if (judgePalindrome(str)) {
        maps.set(str, str.length);
      }
      j++;
    }
  }
  return [...maps.keys()]
};

console.log(longestPalindrome("babad")) 
// @lc code=end

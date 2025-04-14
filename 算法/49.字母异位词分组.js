/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (66.17%)
 * Likes:    1918
 * Dislikes: 0
 * Total Accepted:    736.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * 示例 2:
 * 
 * 
 * 输入: strs = [""]
 * 输出: [[""]]
 * 
 * 
 * 示例 3:
 * 
 * 
 * 输入: strs = ["a"]
 * 输出: [["a"]]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= strs.length <= 10^4
 * 0 <= strs[i].length <= 100
 * strs[i] 仅包含小写字母
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 排序法，巧妙运用小写拼音字母排序来判断是否相等，排序之后的字符串当做key，值为[命中的选项值]，最终找出
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var groupAnagrams = function(strs) {
//     let maps = new Map();
//     for (const iterator of strs) {
//         let tt = Array.from(iterator)
//         tt.sort();
//         const key = tt.toString()
//         const list = maps.get(key)? maps.get(key):new Array();
//         list.push(iterator);
//         maps.set(key, list);
//     }
//     return [...maps.values()]
// };


//计数法。利用数组每一项的charCodeAt()获取Unicode值,都是小写字母，创建一个长度26的数组，计算和’a’的差值对应位上的值加一，存储在map里面作为key
// 如果有值直接push当前选项，如果没有就等于[当前选项]，直到完全找出
var groupAnagrams = function(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(s) : map[count] = [s];
    }
    return Object.values(map);
};

console.log(groupAnagrams(strs));

// @lc code=end


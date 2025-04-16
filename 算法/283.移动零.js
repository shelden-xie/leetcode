/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * https://leetcode-cn.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (63.85%)
 * Likes:    2397
 * Dislikes: 0
 * Total Accepted:    1.4M
 * Total Submissions: 2.2M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 *
 *
 * 示例 2:
 *
 *
 * 输入: nums = [0]
 * 输出: [0]
 *
 *
 *
 * 提示:
 *
 *
 *
 * 1 <= nums.length <= 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 *
 *
 * 进阶：你能尽量减少完成的操作次数吗？
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 双指针解法
 */
// 双循环 //第一遍循环就是找到数组中有几个位置上出现了 “0”，同事利用遍历index和j，来把后面的非“0”的值提到前面
// 第二层循环就是利用j的起始值把数组长度的差值位置变为“0”
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element !== 0) {
      nums[j] = element;
      j++;
    }
  }
  console.log(nums, j);
  for (let i = j; i < nums.length; i++) {
    const element = nums[i];
    if (element !== 0) {
      nums[i] = 0;
    }
  }
};
// // 单循环,利用交换位置有种快排的思维
// var moveZeroes1 = function(nums) {
//     let j = 0
//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];
//         if(element!==0){
//            let emp = element;
//            nums[i] = nums[j];
//            nums[j++] = emp
//         }
//         console.log(nums,i,j)
//     }
// };

moveZeross([1, 0, 1, 0, 3, 12, 0]);
// @lc code=end

var findMedianSortedArrays = function (nums1, nums2) {
  let l1 = 0,l2 = 0;
  const arr = [];
  const len1 = nums1.length,len2 = nums2.length;
  while (l1 < len1 || l2 < len2) {
    console.log(l1,l2,nums1[l1] ,nums2[l2])
    if (l1 < len1 && (l2 >= len2 || nums1[l1] <= nums2[l2])) {
      arr.push(nums1[l1++]);
    } else if (l2 < len2) {
      arr.push(nums2[l2++]);
    }
  }
  console.log(arr)
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
};
findMedianSortedArrays([1, 3, 5,6, 7, 9], [2, 4, 6, 7, 8]);

// let l1=0,l2=0,arr=[];
// while(l1<nums1.length || l2<nums2.length){
//     console.log(l1,l2)
//     if(l1<nums1.length && l2<nums2.length){
//         if(nums1[l1]<nums2[l2]){
//             arr.push(nums1[l1],nums2[l2])
//         }else{
//             arr.push(nums2[l2],nums1[l1])
//         }
//         l1++;
//         l2++;
//     }else if(l1>=nums1.length){
//         arr.push(nums2[l2])
//         l2++
//     }else if(l2>=nums2.length){
//         arr.push(nums1[l1])
//         l1++
//     }
// }

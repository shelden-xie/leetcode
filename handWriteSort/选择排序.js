// 算法复杂度图片预览：https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/6/16f7b3db4a239442~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.png

/**
 * 依次找到剩余元素的最小值或者最大值，放置在末尾或者开头,在每一次循环找到最小值的下标，然后结束进行位置替换
 */

let array = [1, 6, 7, 4, 5, 8, 9, 0, 2, 3];

const selectSort = (arr)=>{
    let minIndex
    for (let i = 0; i < arr.length; i++) {
        minIndex = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
    return arr
}
console.log(selectSort(array))
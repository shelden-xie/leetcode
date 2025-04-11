// 通过相邻元素的比较和交换，使得每一趟循环都能找到未有序数组的最大值或最小值。
// 基础班，直接一轮一轮循环比较

let array = [1, 6, 7, 4, 5, 8, 9, 0, 2, 3];

const bubbleSort = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j+1]<arr[j]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
// 添加标记，标记就是当没有出现arr[j+1]<arr[j]，就说明后面的顺序就是按序排列，减少次数
const bubbleSort1 = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        let mark = true
        for (let j = 0; j < arr.length-i; j++) {
            if(arr[j+1]<arr[j]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                mark = false
            }
        }
        if(mark) return
    }
    return arr
}
console.log(bubbleSort1(array))
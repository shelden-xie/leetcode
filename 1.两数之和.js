let nums = [2,2,7,11,15,3,5,23,4,7], target = 7;

const summer = (arr,target)=>{
    let newarr = []
    for (let index = 0; index < arr.length - 1; index++) {
        const element1 = arr[index];
        for (let j = index + 1; j < arr.length; j++) {
            const element2 = arr[j];
            if(element1 + element2 === target) {
                newarr.push([index,j])  
            }
        }
    }
    return newarr;
}

// 利用差值存储实现
const summer1 = (arr,target)=>{
    let obj = {}
    let newarr = []
    for (let index = 0; index < arr.length - 1; index++) {
        const element1 = arr[index];
        const targetM = target - element1
        const targetIndex = obj[targetM]
        if(targetIndex !== undefined) {
            newarr.push([targetIndex,index])
        }else{
            obj[element1] = index
        }
        console.log(obj)
    }
    return newarr;
}


console.log(summer1(nums,target))
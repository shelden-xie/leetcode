// js 迭代器 ： array迭代器、string迭代器、map迭代器、set迭代器、object迭代器、arguments迭代器、nodeList迭代器、generator迭代器、自定义迭代器
// 迭代器会有一个next方法，next方法会返回一个对象，这个对象有两个属性，一个是value，一个是done，done表示是否遍历完，value表示当前遍历的值
const myObject = {
    item:[1,2,3],
    tome:'342',
    [Symbol.iterator](){
        const self = this;
        const item = Object.keys(self)
        let index = 0;
        return {
            next(){
                return{
                    value:self[item[index++]],
                    done:item.length < index
                }
            }
        }
    }
}

for (const element of myObject) {
    console.log(element)
}
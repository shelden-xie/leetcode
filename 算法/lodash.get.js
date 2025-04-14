var object = { 'a': [{ 'b': { 'c': 3 } }] }

// //=> 3
// get(object, "a[0].b.c");
 
// //=> 3
// get(object, 'a[0]["b"]["c"]');
 
// //=> 10086
// get(object, "a[100].b.c", 10086);


const lodashget =(object,path,defaultValue)=>{
    let newArr=path; 
    if(typeof path === "string"){
        newArr =  path.replace(/\[(.+?)\]/g,(a,b)=>`.${b}`).replace(/\"(.+?)\"/g,(a,b)=>`${b}`).split('.');
        console.log(newArr)
    }
    let source = object
    for (const item of newArr) {
        if(source[item]){
            source = source[item]
        }
    }
    return source === undefined?defaultValue:source
}
console.log(lodashget(object,'a[0]["b"].c',null))

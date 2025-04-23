// const hasRecycling = (obj, set = new Set()) => {
//   if (obj === null || typeof obj !== "object") {
//     return false;
//   }
//   if(set.has(obj)){
//     return true
//   }
//   set.add(obj);
//   for (const key in obj) {
//     if(hasRecycling(obj[key],set)){
//         return true
//     }
//   }
//   return false
// };
const hasRecycling = (obj,cache = new Set())=>{
  if(!obj || typeof obj !== 'object') return false;
  if(cache.has(obj)) return true;
  cache.add(obj);
  for (key in obj){
     if(hasRecycling(obj[key],cache)){
         return true
     }
  }
  return false
 }

 const a = {};
 const b = { a };
 a.b = b;
console.log(hasRecycling(a))
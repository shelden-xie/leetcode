const deepClone = (obj,cache = new weakMap ())=>{
 if(typeof obj!=='object' || !obj) return obj
 if(cache.has(obj)) return cache.get(obj)
  let cloneObj  = {}
  if(obj instanceof Array){
    cloneObj = []
  }else if(obj instanceof Object){
    cloneObj = {}
  } else {
    return obj
  }
  for (const key in obj) {
    if(obj.hasOwnOperty(key)){
      cloneObj[key] = deepClone(obj[key],cache)
    }
  }
  return cloneObj
}
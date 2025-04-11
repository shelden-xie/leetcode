const hasRecycling = (obj, set = new Set()) => {
  if (obj === null || typeof obj !== "object") {
    return false;
  }
  if(set.has(obj)){
    return true
  }
  set.add(obj);
  for (const key in obj) {
    if(hasRecycling(obj[key],set)){
        return true
    }
  }
  return false
};


let obj2 = {
    name: 'Jerry',
    friend: obj2
}
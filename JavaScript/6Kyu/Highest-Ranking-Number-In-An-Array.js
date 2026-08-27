function highestRank(arr){
    //this is definitely not a good solution but it works. 
    //make an object which will contain the counts of arr values. 
    let count = {}
    //loop over the arr. If an element is not in the object then add it and set the value to 1. 
    for(let i=0; i<arr.length; i++){
    //if an element is in the count object then increment its value in the object by one. 
      if(count[arr[i]]){
        count[arr[i]]++
      }else{
        count[arr[i]] = 1
      }
    }
    let values = Object.values(count)
    let keys = Object.keys(count)
  //   return Number(keys[values.indexOf(Math.max(...values))])
    //find the object key with the maximum number of entries. if there are two then return the largest.
    if(values.indexOf(Math.max(...values)) === values.lastIndexOf(Math.max(...values))){
      return Number(keys[values.indexOf(Math.max(...values))])
    }else{
    //otherwise return the key with the max appearances. 
      let firstIndex = values.indexOf(Math.max(...values))
      let secondIndex = values.lastIndexOf(Math.max(...values))
      if(values[firstIndex] > values[secondIndex]){
        return Number(keys[values.indexOf(Math.max(...values))])
      }else{
        return Number(keys[values.lastIndexOf(Math.max(...values))])
      }
    }
    
  }
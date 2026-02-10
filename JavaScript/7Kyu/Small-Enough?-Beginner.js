function smallEnough(a, limit){
    //filter for any elements in the array that are greater than the limit. 
    let numsTooLarge = a.filter((num)=> num>limit?true:false)
    //if array.length > 0 return false, else return true
    return numsTooLarge.length?false:true
  }